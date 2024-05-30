import fs from 'fs';
import path from 'path';
import { OpenAI } from 'langchain/llms/openai';
import { OpenAIEmbeddings } from 'langchain/embeddings/openai';
import { RetrievalQAChain } from 'langchain/chains';
import { HNSWLib } from 'langchain/vectorstores/hnswlib';
import { RecursiveCharacterTextSplitter } from 'langchain/text_splitter';

// attempt to store chain in mem -- not sure if it will work
let chain: RetrievalQAChain;

const initLLM = async () => {
  console.log('init llm');
  const model = new OpenAI({
    openAIApiKey: process.env.OPENAI_SECRET,
  });
  // const text = fs.readFileSync(
  //   path.resolve(__dirname, 'public/resume.txt'),
  //   'utf-8',
  // );
  const jsonDirectory = path.join(process.cwd(), 'public');
  const text = fs.readFileSync(`${jsonDirectory}/resume.txt`, 'utf-8');

  const textSplitter = new RecursiveCharacterTextSplitter({ chunkSize: 1024 });
  const docs = await textSplitter.createDocuments([text]);

  // Create a vector store from the documents.
  const vectorStore = await HNSWLib.fromDocuments(
    docs,
    new OpenAIEmbeddings({ openAIApiKey: process.env.OPENAI_SECRET }),
  );
  chain = RetrievalQAChain.fromLLM(model, vectorStore.asRetriever());
};

export const askQuestion = async (question: string) => {
  if (!chain) {
    await initLLM();
  }
  console.log('chain generated. continuing');

  return chain.call({ query: question });
};
