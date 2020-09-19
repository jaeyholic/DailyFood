import { Flex, Spinner } from '@chakra-ui/core';

const Loader = () => {
  return (
    <Flex align='center' justify='center' h='58vh' w='100vw'>
      <Spinner
        mt={64}
        size='xl'
        thickness='4px'
        speed='0.65s'
        emptyColor='gray.200'
        color='blue.500'
      />
    </Flex>
  );
};

export default Loader;
