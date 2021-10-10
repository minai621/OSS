import react, { useEffect, useState } from 'react';
import { Box, BoxProps, ComponentWithAs, Flex } from '@chakra-ui/react';
import Loading from '../atom/Loading';
import { motion, MotionProps } from 'framer-motion';
import Header from '../molecule/Header';

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
    <Flex minH='100vh' justify='center'>
      { loading === false ? (
        <MotionBox
          initial="visible"
          animate={ loading ? "visible" : "hidden"}
          variants={variants}
        >
          <Loading/>
        </MotionBox>
      ) :
        <Flex w={'50%'} justify={'center'} dir={'column'}>
          <Header/>
        </Flex>
      }
    </Flex>
  )
}

export default HomeTemplate;