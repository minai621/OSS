import react, { useEffect, useState } from 'react';
import { Box, BoxProps, ComponentWithAs, Flex } from '@chakra-ui/react';
import Loading from '../atom/Loading';
import { motion, MotionProps } from 'framer-motion';
import Header from '../molecule/Header';
import Contents from '../organism/Contents';

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
    setTimeout(()=> {setLoading(true)}, 2000)
  }, [])
  return (
    <Flex w={'100%'} minH='100vh' justify='center'>
      { loading === false ? (
        <MotionBox
          initial="visible"
          animate={ loading ? "visible" : "hidden"}
          variants={variants}
        >
          <Loading/>
        </MotionBox>
      ) :
        <Flex w={'100%'} h={'100%'} justify={'center'} flexDir={'column'}>
          <Header/>
          <Contents/>
        </Flex>
      }
    </Flex>
  )
}

export default HomeTemplate;