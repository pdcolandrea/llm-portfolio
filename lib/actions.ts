'use server';

export const postMessage = async (data: FormData) => {
  const question = data.get('prompt');
  console.log('submitted');
  console.log(data);
};

export const getMessage = async () => {};
