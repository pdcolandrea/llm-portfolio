'use server';

import { cookies } from 'next/headers';
import { askQuestion } from './llm-ai';

// how to update state w/o session?
export const postMessage = async (data: FormData) => {
  cookies();
  const question = data.get('prompt');
  console.log({ question });
  if (!question) {
    return;
  }

  const resp = await askQuestion(question.toString());
};

export const getMessage = async () => {};
