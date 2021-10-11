import { Box, Flex } from '@chakra-ui/react';
import { content } from '../../../constant/content';
import Content from '../molecule/Content';

const Contents: React.FC = () => {
  const contents = Object.values(content);
  return(
    <Flex flexDir={'column'} justify={'center'} fontWeight={'bold'}>
      {contents.map((props, index) =>
        <Content key={index} {...props} />
      )}
    </Flex>
  )
};

export default Contents;