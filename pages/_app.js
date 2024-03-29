import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/core'
import { customTheme } from '../theme/theme'

function MyApp ({ Component, pageProps }) {
  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
