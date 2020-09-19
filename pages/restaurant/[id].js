import {
  Box,
  Flex,
  Grid,
  Heading,
  Image,
  Text,
  useColorModeValue,
  Link,
  Icon,
  Button,
} from '@chakra-ui/core';
import Axios from 'axios';
import NextLink from 'next/link';
import { useRouter } from 'next/router';
import ReactMapGL from 'react-map-gl';
import Loader from '../../components/Loader';
import { ArrowLeft, Location, Phone } from '../../theme/customicons';

const Restaurant = () => {
  const router = useRouter();
  const { id } = router.query;

  const bg = useColorModeValue('#1A202C', 'gray.200');
  const color = useColorModeValue('gray.200', 'gray.800');

  const [data, setData] = React.useState([]);
  const [status, setStatus] = React.useState('empty');
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setStatus('loading');
        const res = await Axios.get(
          `https://opentable.herokuapp.com/api/restaurants/${id}`
        );
        console.log(res.data);
        setData(res.data);
        setStatus('data');
      } catch (error) {
        setError(error.message);
      }
    };
    fetchData();
    return () => clearTimeout(id);
  }, [id]);

  return (
    <Box h='100vh' w='100vw'>
      <Grid templateColumns={{ md: '40% 60%' }}>
        <Box h='100vh' w='100%'>
          <Image h='100%' w='100%' objectFit='cover' src={data.image_url} />
        </Box>

        <Box>
          {status === 'loading' && <Loader />}
          <Box p={{ md: 10 }}>
            <NextLink href='/'>
              <Flex
                align='center'
                justify='center'
                fontSize='xl'
                bg={bg}
                w={56}
                color={color}
                rounded='md'
                mb={4}
                as='button'
              >
                <Icon as={ArrowLeft} />{' '}
                <Text fontWeight={600}>Back to homepage</Text>
              </Flex>
            </NextLink>
            <Flex align='center'>
              <Heading as='h2' fontSize={{ md: '6xl' }}>
                {data.name}
              </Heading>
              <Text fontWeight={900} fontSize='2xl' ml={10}>
                ${data.price}
              </Text>
            </Flex>

            <Box>
              <Text fontSize='xl'>
                <Icon as={Location} boxSize={6} /> {data.address},{' '}
                <Text as='span'>{data.city}</Text>,{' '}
                <Text as='span'>
                  {data.country}, <Text as='span'>{data.postal_code}</Text>
                </Text>
              </Text>

              <Text mb={{ md: 4 }} fontSize='xl'>
                <Icon as={Phone} boxSize={6} /> {data.phone}
              </Text>
              <NextLink href={data.reserve_url || '/'} passHref>
                <Link _hover={{ textDecor: 'none' }} isExternal>
                  <Button w={64} mt={8} h={16}>
                    Reserve a table
                  </Button>
                </Link>
              </NextLink>
            </Box>
          </Box>

          <ReactMapGL
            width='100%'
            height={400}
            latitude={data.lat}
            longitude={data.lng}
            zoom={20}
            mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY}
            mapStyle='mapbox://styles/jaeyholic/ck2ahax4b862g1cmmsltpitj9'
          />
        </Box>
      </Grid>
    </Box>
  );
};

export default Restaurant;
