import { extendTheme, ColorMode } from '@chakra-ui/core'

export const customTheme = extendTheme({
  styles: {
    global: props => ({
      body: {
        fontSize: 'sm',
        color: props.colorMode === 'dark' ? '#E2E8F0' : 'gray.800',
        bg: props.colorMode === 'dark' ? '#1A202C' : 'white',
        lineHeight: 'tall'
      },
      a: {
        color: props.colorMode === 'dark' ? 'teal.300' : 'teal.500'
      }
    })
  }
})
