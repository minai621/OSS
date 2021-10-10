import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import theme from './theme';
ReactDOM.render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin={'true'} />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500&display=swap" rel="stylesheet" />
      <App />
    </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
