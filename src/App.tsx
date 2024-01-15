import React from 'react';
import { Layout } from './components/Layout/Layout';
import { Box, ChakraProvider, extendTheme } from '@chakra-ui/react';
import { Global } from '@emotion/react';
import { LoginForm } from './components/LoginForm'
import banner from './components/Layout/banner.png'

const Fonts = () => (
  <Global
    styles={`
      @import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@500;700&display=swap');
    `}
  />
)

const theme = extendTheme({
  fonts: {
    heading: 'Open Sans',
    body: 'Open Sans'
  }
})

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Layout>
        <Box
          _before={{content: '""', backgroundImage: `url(${banner})`, width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1}}
          _after={{content: '""', backgroundColor: 'rgba(0,0,0,0.8)', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: -1}}
        >
          <LoginForm />
        </Box>
      </Layout>
    </ChakraProvider>
  );
}

export default App;
