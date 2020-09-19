import {
  Box,
  Grid,
  Text,
  useColorMode,
  useColorModeValue,
  Link,
} from '@chakra-ui/core';
import Head from 'next/head';
import Axios from 'axios';
import Card from '../components/Card';
import Paginaton from '../components/Pagination';
import EmptyState from '../components/EmptyState';
import Loader from '../components/Loader';
import Navbar from '../components/Navbar';

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue('gray.200', '#1A202C');
  const color = useColorModeValue('gray.800', 'gray.200');

  const [selected, setSelected] = React.useState('city');
  const [searchQuery, setSearchQuery] = React.useState('');
  const [data, setData] = React.useState([]);
  const [status, setStatus] = React.useState('empty');
  const [error, setError] = React.useState(false);
  const [perPage, setPerPage] = React.useState(null);
  const [totalPages, setTotalPages] = React.useState(null);
  const [currentPage, setCurrentPage] = React.useState(1);
  const [request, setRequest] = React.useState(0);

  React.useEffect(() => {
    const delay = setTimeout(() => {
      setRequest((prevState) => prevState + 1);
      console.log(request);
    }, 1500);
    return () => clearTimeout(delay);
  }, [searchQuery]);

  React.useEffect(() => {
    const id = setTimeout(() => {
      const fetchData = async () => {
        try {
          if (request) {
            if (selected && searchQuery) {
              setStatus('loading');
              const res = await Axios.get(
                `https://opentable.herokuapp.com/api/restaurants?${selected}=${searchQuery}&page=${currentPage}`
              );
              setData(res.data.restaurants);
              setPerPage(res.data.per_page);
              setTotalPages(res.data.total_entries);
              setStatus('data');
            }
          }
        } catch (error) {
          setError(error.message);
        }
      };
      fetchData();
    }, 3000);
    return () => clearTimeout(id);
  }, [selected, searchQuery, currentPage]);

  if (error) {
    return <Text>An error occured...</Text>;
  }

  return (
    <Box>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSelected={setSelected}
        colorMode={colorMode}
        toggleColorMode={toggleColorMode}
        bg={bg}
        color={color}
      />

      {status === 'loading' && <Loader />}

      <EmptyState status={status} />

      <Grid
        templateColumns={{ md: 'repeat(4, 1fr)' }}
        gap={{ md: 10 }}
        m={{ md: 32 }}
      >
        {data.map((item) => (
          <Card key={item.id} item={item} color={color} />
        ))}
      </Grid>

      {status === 'data' && (
        <Paginaton
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
          perPage={perPage}
          totalPages={totalPages}
        />
      )}

      <Box as='footer' w='30rem' mx='auto'>
        <Text>
          &copy; 2020. DailyFood by{' '}
          <Link
            href='https://github.com/jaeyholic'
            isExternal
            color='teal.300'
            _hover={{ textDecor: 'none' }}
          >
            @jaeyholic
          </Link>
          . All rights reserved.
        </Text>
      </Box>
    </Box>
  );
}
