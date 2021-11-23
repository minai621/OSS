import { Flex } from '@chakra-ui/react';
import { content } from '../../../constant/content';
import Content from '../molecule/Content';
import { useEffect, useState } from 'react';
import { List, IWriteGet } from '../../../lib/api/write';

const Contents: React.FC = () => {
  const [contents, setContents] = useState<Array<IWriteGet>>([]);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);
  useEffect(() => {
    if(!isLoaded){
      (async () => {
        const data: any = await List()!;
        setContents(data);
      })()
      setIsLoaded(true);
    }
  }, [contents])
  return(
    <Flex maxW={'500px'} minW={'230px'} w={'100%'} flexDir={'column'} fontWeight={'bold'}>
      {contents.map((props, index) =>
        <Content key={index} {...props} />
      )}
    </Flex>
  )
};

export default Contents;