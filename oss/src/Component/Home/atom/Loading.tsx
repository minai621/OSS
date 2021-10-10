import { Text, Flex } from '@chakra-ui/react';
import React from 'react';

const Loading: React.FC = () => {
  return (
    <Flex w='100%' height='100%' justifyContent='center' align='center' direction='column'>
      <Text
        fontSize='50px'
        fontWeight='bold'
      >Party SSU
        <hr style={{borderColor: 'SLB'}}/>
      </Text>
      <Text>우리들이 함께하는 식사</Text>
    </Flex>
  )
}

export default Loading;