import { Button } from '@chakra-ui/react';

const LoginButton: React.FC = () => {
  return(
    <Button
      w={'100px'}
      height={'50%'}
      fontWeight={600}
      color={"white"}
      bg='#00587C'
      mr={'20px'}
    >LOGIN</Button>
  )
}

export default LoginButton;