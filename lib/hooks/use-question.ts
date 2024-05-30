import axios from 'axios';
import { useMutation } from 'react-query';

interface IQuestion {
  question: string;
}

interface IQuestionResp {
  resp: {
    answer: string;
  };
}

const postQuestion = async (data: IQuestion) => {
  const response = await axios.post('/api/chat', data);
  return response.data as IQuestionResp;
};

export const useQuestion = () => {
  return useMutation((data: IQuestion) => postQuestion(data));
};
