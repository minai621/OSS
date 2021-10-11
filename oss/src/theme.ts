import { extendTheme } from '@chakra-ui/react';
import { buttonStyle as Button } from './styles/buttonStyle';
const theme = extendTheme({
  colors: {
    SLB: '#57C7C2',
    SMB: '#008EAA',
    SDB: '#00587C'
  },
  fonts: {
    heading: 'Noto Sans Korean',
    body: 'Noto Sans Korean',
  },
  styles: {
    global: {
      body: {
        bg: 'white.100',
        color: 'SLB',
        lineHeight: 1.5,
      }
    }
  },
  components: {
    Button,
  },
});

export default theme;