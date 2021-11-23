import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';
import { IWriteGet } from '../../../lib/api/write';
import React from 'react';

const Content: React.FC<IWriteGet> = ( props: IWriteGet ) => {
  return (
    <Box boxShadow={'xl'} m={'15px'} p={'15px'} bg={'SMB'} color={'white'} rounded={'md'}>
      <Flex h={'100%'} flexDir={'column'} justify={'center'}>
        <Heading size={'lg'}>{props.title}<hr style={{color: 'white', marginTop: '5px', marginBottom: '8px'}}/></Heading>
        <Text fontSize={'0.75em'} mb={'15px'}>
          {props.publishedDate} |
          글쓴이 : {props.nickname}
        </Text>
        <Box>
          <Text m={1}>전공: {props.major}</Text>
          <Text m={1}>학번: {props.studentNumber}</Text>
          <Text m={1}>음식점: {props.restaurant}</Text>
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