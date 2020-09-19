import { Box, Flex, Heading, Image, Text } from '@chakra-ui/core';

const EmptyState = ({ status }) => {
  return (
    <Flex
      d={status === 'empty' ? 'flex' : 'none'}
      align='center'
      justify='center'
      h='66vh'
      w='100vw'
      direction='column'
    >
      <Box mt='25rem' textAlign='center'>
        <Heading as='h3' fontWeight={900} fontSize={{ md: '3xl' }}>
          No Restaurants to show
        </Heading>
        <Text fontSize='xl'>
          Search for a restaurant by name, city, address, etc...
        </Text>
        <Image
          w='40%'
          h='70%'
          objectFit='contain'
          src='/images/restaurant.png'
          mx='auto'
        />
      </Box>
    </Flex>
  );
};

export default EmptyState;
