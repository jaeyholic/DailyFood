import { Box, Flex, FormLabel, Icon, Image, Text } from '@chakra-ui/core'
import { Check, Caret } from '../../theme/customicons'

const CustomSelect = () => {
  const [onOpen, setOnOpen] = React.useState(false)
  const [selected, setSelected] = React.useState('')
  return (
    <Box mt='0.25rem' w={{ md: '20%' }}>
      <Box pos='relative'>
        <Text as='span' d='inline-block' w='100%' rounded='sm' shadow='sm'>
          <Box
            onClick={() => setOnOpen(!onOpen)}
            as='button'
            type='button'
            aria-haspopup='listbox'
            aria-expanded='true'
            aria-labelledby='listbox-label'
            cursor='default'
            pos='relative'
            w='100%'
            rounded='md'
            border='1px'
            borderColor='gray.300'
            bg='white'
            pl={3}
            pr={10}
            py={2}
            textAlign='left'
            _focus={{
              outline: 'none',
              boxShadow: '0 0 0 3px rgba(66, 153, 225, 0.5)',
              borderColor: 'blue.300'
            }}
            lineHeight={{ sm: '1.25rem' }}
            fontSize={{ sm: 'sm' }}
            // class='transition ease-in-out duration-150'
          >
            <Flex align='center' ml=' 0.75rem'>
              <Text
                as='span'
                d='block'
                overflow='hidden'
                textOverflow='ellipsis'
                whiteSpace='nowrap'
              >
                Tom Cook
              </Text>
            </Flex>
            <Text
              as='span'
              pos='absolute'
              top={0}
              bottom={0}
              right={0}
              align='center'
              pr={2}
              pointerEvents='none'
            >
              <Icon as={Caret} />
            </Text>
          </Box>
        </Text>

        {/* <!-- Select popover, show/hide based on select state. --> */}
        {onOpen && (
          <Box
            pos='absolute'
            mt={1}
            w='100%'
            rounded='md'
            bg='white'
            shadow='lg'
          >
            <Text
              as='ul'
              tabindex='-1'
              role='listbox'
              aria-labelledby='listbox-label'
              aria-activedescendant='listbox-item-3'
              maxH={56}
              rounded='md'
              py={1}
              fontSize={{ xs: 'md', sm: 'sm' }}
              lineHeight={{ xs: '1.5rem', sm: '1.25rem' }}
              shadow='xs'
              overflow='auto'
              _focus={{ outline: 'none' }}
            >
              {/* <!--
          Select option, manage highlight styles based on mouseenter/mouseleave and keyboard navigation.

          Highlighted: "text-white bg-indigo-600", Not Highlighted: "text-gray-900"
        --> */}
              <Text
                as='li'
                id='listbox-item-0'
                role='option'
                color='gray.900'
                cursor='default'
                userSelect='none'
                pos='relative'
                py={2}
                pl={3}
                pr={9}
              >
                <Flex align='center' ml=' 0.75rem'>
                  {/* <!-- Selected: "font-semibold", Not Selected: "font-normal" --> */}
                  <Text as='span' d='block' class='font-normal block truncate'>
                    Wade Cooper
                  </Text>
                </Flex>

                {/* <!--
            Checkmark, only display for selected option.

            Highlighted: "text-white", Not Highlighted: "text-indigo-600"
          --> */}
                <Flex
                  as='span'
                  pos='absolute'
                  top={0}
                  bottom={0}
                  right={0}
                  align='center'
                  pr={4}
                >
                  {/* <!-- Heroicon name: check --> */}
                  <Icon as={Check} boxSize={8} />
                </Flex>
              </Text>

              {/* <!-- More options... --> */}
            </Text>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default CustomSelect
