import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import '../styles/globals.css'
import { StepsStyleConfig as Steps } from 'chakra-ui-steps';

const theme = extendTheme({
  initialColorMode: "light",
  useSystemColorMode: false,
  components: {
    Steps,
  },
});

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
      <ChakraProvider theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
  )
}

export default MyApp