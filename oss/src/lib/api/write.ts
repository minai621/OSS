import client from './client';
import { log } from 'util';

export interface IWrite {
  studentNumber: number;
  age: number;
  nickname: string;
  major: string;
  title: string;
  restaurant: string;
  vaccine: boolean;
  password: string;
  body: string;
}

export interface IWriteGet extends IWrite {
  _id: string;
  __v: number;
  publishedDate: Date;
}

export const Write = ({
  studentNumber,
  age,
  nickname,
  major,
  restaurant,
  vaccine,
  title,
  password,
  body
}: IWrite) => {
  client.post('/api/write', {
    studentNumber,
    age,
    nickname,
    major,
    restaurant,
    vaccine,
    title,
    password,
    body
  });
}

export const List = async () => {
  try {
    const res = await client.get('/api/write');
    return res.status = 200 ? res.data : "error";
  } catch (e) {
    return e;
  }
};