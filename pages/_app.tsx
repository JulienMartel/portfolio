import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { extendTheme } from '@chakra-ui/react'

const colors = {
  off: {
    white: '#b8b8b8',
    black: '#292929',
  },
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }: AppProps) {
  return <ChakraProvider {...{theme}}>
    <Component {...pageProps} />
  </ChakraProvider>
}

export default MyApp