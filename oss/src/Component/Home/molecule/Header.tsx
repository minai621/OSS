import { Flex, Text } from '@chakra-ui/react';

const Header:React.FC = () => {
  return(
    <Flex
      width="100%"
      h='10vh'
      bgColor='#57C7C2'
      align='center'
      justify='center'
    >
        <Text
          fontSize={'2em'}
          fontWeight={'bold'}
          color={'white'}
          ml={'15px'}
        >Party SSU
        </Text>
    </Flex>
  )
}

export default Header;