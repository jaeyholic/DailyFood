import React from 'react';
import { Button, Flex, Text } from '@chakra-ui/core';

const Paginaton = ({ currentPage, totalPages, perPage, setCurrentPage }) => {
  return (
    <Flex align='center' w='30rem' mx='auto' py={{ md: 10 }}>
      <Button
        w={32}
        rounded='none'
        disabled={currentPage <= 1}
        onClick={() => setCurrentPage((prevState) => prevState - 1)}
      >
        Prev
      </Button>
      <Text mx={10}>
        Page {currentPage} of {Math.ceil(totalPages / perPage)}
      </Text>
      <Button
        w={32}
        rounded='none'
        disabled={currentPage >= Math.ceil(totalPages / perPage)}
        onClick={() => setCurrentPage((prevState) => prevState + 1)}
      >
        Next
      </Button>
    </Flex>
  );
};

export default Paginaton;
