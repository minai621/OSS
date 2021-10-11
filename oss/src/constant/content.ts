import { ContentType } from '../type';

const date = `
${new Date().getFullYear()}년 
${new Date().getMonth()}월
${new Date().getDay()}일
${new Date().getHours()}: ${new Date().getMinutes()}
`;
export const content: Record<number, ContentType> = {
  1: {
    title: '숭실대 밥먹을 사람',
    date: date,
    writer: '숭사리1',
    major: 'AI융합',
    student_No: '11111111',
    favorite: '마라탕',
    vaccine: true,
  },
  2: {
    title: '숭실대 밥먹을 사람',
    date: date,
    writer: '숭사리1',
    major: 'AI융합',
    student_No: '11111111',
    favorite: '마라탕',
    vaccine: true,
  },
  3: {
    title: '숭실대 밥먹을 사람',
    date: date,
    writer: '숭사리1',
    major: 'AI융합',
    student_No: '11111111',
    favorite: '마라탕',
    vaccine: true,
  },
};