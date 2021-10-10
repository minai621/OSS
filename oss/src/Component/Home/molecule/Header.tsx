import { Box, Flex, Text } from '@chakra-ui/react';
import LoginButton from '../atom/LoginButton';

const Header:React.FC = () => {
  return(
    <Flex
      width="100%"
      h='10vh'
      bgColor='#57C7C2'
      align='center'
      justify={'space-between'}
    >
        <Text
          fontSize={'2em'}
          fontWeight={'bold'}
          color={'white'}
          ml={'15px'}
        >Party SSU</Text>
        <LoginButton />
    </Flex>
  )
}

export default Header;