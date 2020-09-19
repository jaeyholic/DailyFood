import {
  Box,
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  Text,
  Link,
} from '@chakra-ui/core';
import NextLink from 'next/link';
import { Location, Phone } from '../../theme/customicons';

const Card = ({ item, color }) => {
  return (
    <Box w={{ md: '20rem' }} borderWidth={1} borderColor={color} rounded='md'>
      <Image w='100%' h={{ md: 56 }} objectFit='cover' src={item.image_url} />
      <Box p={6}>
        <Flex
          align='center'
          justify='space-between'
          mb={{ md: 4 }}
          h={{ md: 16 }}
        >
          <Heading as='h4' fontSize={{ md: '2xl' }} fontWeight={900}>
            {item.name}
          </Heading>
          <Text fontWeight={900} fontSize='lg'>
            ${item.price}
          </Text>
        </Flex>
        <Text>
          <Icon as={Location} boxSize={6} /> {item.address},{' '}
          <Text as='span'>{item.city}</Text>
        </Text>
        <Text as='span' ml='1.7rem'>
          {item.country}, <Text as='span'>{item.postal_code}</Text>
        </Text>
        <Text mb={{ md: 4 }}>
          <Icon as={Phone} boxSize={6} /> {item.phone}
        </Text>
        <NextLink href={item.reserve_url} passHref>
          <Link isExternal _hover={{ textDecor: 'none' }}>
            <Button w='100%'>Reservation</Button>
          </Link>
        </NextLink>
      </Box>
    </Box>
  );
};

export default Card;
