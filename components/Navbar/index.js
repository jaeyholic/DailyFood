import { Box, Flex, Heading, Icon, Input, Select } from '@chakra-ui/core';
import { Moon, Sun } from '../../theme/customicons';

const Navbar = ({
  colorMode,
  setSelected,
  setSearchQuery,
  toggleColorMode,
  searchQuery,
  bg,
  color,
}) => {
  return (
    <Flex
      h={{ md: 16 }}
      align='center'
      justify='space-between'
      px={{ md: 20 }}
      w='100%'
      pos='fixed'
      borderBottomWidth='1px'
      borderColor={colorMode === 'dark' ? 'gray.500' : 'gray.800'}
      top={0}
      bg={bg}
      zIndex={100}
    >
      <Heading
        as='h4'
        textTransform='uppercase'
        fontSize={{ md: '2xl' }}
        fontWeight='900'
      >
        Dailyfood
      </Heading>

      <Flex w={{ md: '80%' }}>
        <Select
          variant='filled'
          _focus={{ outline: 'none' }}
          w={{ md: '15%' }}
          onChange={(e) => setSelected(e.target.value)}
        >
          <option value='city'>City</option>
          <option value='name'>Name</option>
          <option value='price'>Price</option>
          <option value='address'>Address</option>
          <option value='state'>State</option>
          <option value='zip'>Zip</option>
          <option value='country'>Country</option>
        </Select>
        <Input
          placeholder='Search for restaurants'
          variant='filled'
          rounded='none'
          value={searchQuery}
          name='searchQuery'
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </Flex>

      <Box color={color} as='button' onClick={toggleColorMode}>
        <Icon as={colorMode === 'dark' ? Sun : Moon} boxSize={10} />
      </Box>
    </Flex>
  );
};

export default Navbar;
