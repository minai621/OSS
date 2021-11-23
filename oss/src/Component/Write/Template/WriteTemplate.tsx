import React from 'react';
import { Flex } from '@chakra-ui/react';
import WriteTab from '../organism/WriteTab';

const WriteTemplate: React.FC = () => {
  return (
    <Flex w='100%' h='100%' justify='center' align='center'>
      <WriteTab />
    </Flex>
  )
}

export default WriteTemplate;