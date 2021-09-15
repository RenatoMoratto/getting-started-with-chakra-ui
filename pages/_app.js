import { ChakraProvider } from '@chakra-ui/react';

import theme from '../src/theme';
import '../src/theme/styles.css';

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
