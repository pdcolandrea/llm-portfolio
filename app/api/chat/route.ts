import { askQuestion } from '@/lib/llm-ai';
import { NextResponse } from 'next/server';

export async function GET(request: Request) {}

export async function POST(request: Request) {
  const data = await request.json();
  if (!data?.question) {
    throw new Error('missing question');
  }

  const resp = await askQuestion(data.question);
  return NextResponse.json(resp);
}
