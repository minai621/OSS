import React from 'react';
import { Flex } from '@chakra-ui/react';
import WriteForm from '../molecule/WriteForm';

const WriteTab: React.FC = () => {
  return(
    <Flex minW='290px' w={'100%'} h={'100%'} bg={'gray.50'} rounded={'lg'}>
      <WriteForm />
    </Flex>
  )
}

export default WriteTab;