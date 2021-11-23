import React, { useEffect, useState } from 'react';
import { Box, BoxProps, ComponentWithAs, Flex } from '@chakra-ui/react';
import Loading from '../atom/Loading';
import { motion, MotionProps } from 'framer-motion';
import Header from '../molecule/Header';
import Contents from '../organism/Contents';
import Written from '../atom/Written';

const MotionBox = motion<BoxProps>(Box);

const HomeTemplate: ComponentWithAs<'div', MotionProps & BoxProps> = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const variants = {
    visible: {
      opacity: 1,
    },
    hidden: {
      opacity: 0,
      transition: {
        delay: 0.5,
        duration: 1.5,
        }
      },
  };
  useEffect(() => {
    setTimeout(()=> {setLoading(true)}, 0)
  }, [])
  return (
    <Flex w='100%' justify='center'>
      { loading === false ? (
        <MotionBox
          initial="visible"
          animate={ loading ? "visible" : "hidden"}
          variants={variants}
        >
          <Loading/>
        </MotionBox>
      ) :
        <Flex w={'100%'} h={'100%'} justify={'center'} align={'center'} flexDir={'column'}>
          <Header/>
          <Contents/>
          <Box
            as="button"
            pos="fixed"
            bottom={"5%"}
            borderRadius="md"
            bg="SLB"
            minW={"100px"} px={10} h={10}
            color="white"
          >
            <Written />
          </Box>
        </Flex>
      }
    </Flex>
  )
}

export default HomeTemplate;