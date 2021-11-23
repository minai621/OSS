import React, { ChangeEvent, FormEvent, FormEventHandler, useState } from 'react';
import { Button, Checkbox, FormControl, FormLabel, Input, Stack, Textarea } from '@chakra-ui/react';
import { Write, List, IWrite } from '../../../lib/api/write';

const WriteForm: React.FC = () => {
  const [studentNumber, setStudentNumber] = useState<number>(0);
  const [age, setAge] = useState<number>(20);
  const [nickname, setNickname] = useState<string>("");
  const [major, setMajor] = useState<string>("");
  const [title, setTitle] = useState<string>("");
  const [restaurant, setRestaurant] = useState<string>("");
  const [vaccine, setVaccine] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");
  const [body, setBody] = useState<string>("");
  const onSubmit =  (e: FormEvent<HTMLButtonElement>) => {
    const data: IWrite = {
      'studentNumber': studentNumber,
      'age': age,
      'nickname': nickname,
      'major': major,
      'title': title,
      'restaurant': restaurant,
      'vaccine': vaccine,
      'password': password,
      'body': body
    }
    console.log(data);
    Write(data);
    window.location.href = "/";
  }
  return (
    <Stack spacing={6} mx={'auto'} w={'100%'} h={'100%'} py={5} px={6}>
      <FormControl id="studentNumber" isRequired>
        <FormLabel>학번</FormLabel>
        <Input placeholder="학번(ex: 19, 20, 21)" size={'md'} bg={'white'}
          onChange={(e: ChangeEvent<HTMLInputElement>) => setStudentNumber(parseInt(e.target.value))}
        />
      </FormControl>
      <FormControl id="age" isRequired>
        <FormLabel>나이</FormLabel>
        <Input placeholder="나이" size={'md'} bg={'white'}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setAge(parseInt(e.target.value))}
        />
      </FormControl>
      <FormControl id="nickname" isRequired>
        <FormLabel>닉네임</FormLabel>
        <Input placeholder="닉네임" size={'md'} bg={'white'}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setNickname(e.target.value)}
        />
      </FormControl>
      <FormControl id="major" isRequired>
        <FormLabel>전공</FormLabel>
        <Input placeholder="전공" size={'md'} bg={'white'}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setMajor(e.target.value)}
        />
      </FormControl>
      <Checkbox onClick={() => setVaccine(!vaccine)}>백신 접종 유무</Checkbox>
      <FormControl id="title" isRequired>
        <FormLabel>제목</FormLabel>
        <Input placeholder="제목" size={'md'} bg={'white'}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)}
        />
      </FormControl>
      <FormControl id="restaurant">
        <FormLabel>식사 장소</FormLabel>
        <Input placeholder="식사 장소" size={'md'} bg={'white'}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setRestaurant(e.target.value)}
        />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>글 암호</FormLabel>
        <Input
          type={"password"}
          placeholder="권한을 위한 암호입니다." size={'md'} bg={'white'}
               onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
        />
      </FormControl>
      <FormControl id="textarea" isRequired>
        <FormLabel>내용</FormLabel>
        <Textarea
          onChange={(e: ChangeEvent<HTMLTextAreaElement>) => setBody(e.target.value)}
          body={body}
          bg={'white'}
          size={'lg'}
          resize={'none'}
        >
        </Textarea>
      </FormControl>
      <Button type={'submit'} size={'lg'} onClick={onSubmit}>
        글 작성
      </Button>
    </Stack>
  )
}

export default WriteForm;