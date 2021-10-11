import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { ContentType } from '../../../type';

const Content: React.FC<ContentType> = ( props: ContentType ) => {
  return (
    <Box boxShadow={'xl'} m={'15px'} p={'15px'} bg={'SMB'} color={'white'} rounded={'md'}>
      <Flex h={'100%'} flexDir={'column'} justify={'center'}>
        <Heading size={'lg'}>{props.title}<hr style={{color: 'white', marginTop: '5px', marginBottom: '8px'}}/></Heading>
        <Text fontSize={'0.75em'} mb={'15px'}>
          {props.date} |
          글쓴이 : {props.writer}
        </Text>
        <Box>
          <Text m={1}>전공: {props.major}</Text>
          <Text m={1}>학번: {props.student_No}</Text>
          <Text m={1}>좋아하는 음식: {props.favorite}</Text>
          <Text>백신접종: {props.vaccine ? "접종완료" : "미접종"}</Text>
        </Box>
        <Flex justify={'space-between'} m={'5px'}>
          <Button
            w={'100px'}
            height={'30px'}
            fontWeight={600}
            color={"white"}
            bg='#00587C'
          > 합석</Button>
          <Button
            w={'100px'}
            height={'30px'}
            fontWeight={600}
            color={"white"}
            bg='#00587C'
          >
            자세히 보기
          </Button>
        </Flex>
      </Flex>
    </Box>
  )
};

export default Content;