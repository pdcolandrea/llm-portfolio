'use client';

import Balancer from 'react-wrap-balancer';
import { DEPLOY_URL } from '@/lib/constants';
import WebVitals from '@/components/home/web-vitals';
import { motion } from 'framer-motion';

import Image from 'next/image';
import AnimatedSocialIcons from '@/components/home/animated-icons';
import { getHomeTime } from '@/lib/utils';

import Avatar from '@/components/home/avatar';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useState } from 'react';

const ACard = motion(Card);

export default async function Home() {
  const [hasClicked, setHasClicked] = useState(false);

  const { isDaytime, time } = getHomeTime();
  const { stargazers_count: stars } = await fetch(
    'https://api.github.com/repos/steven-tey/precedent',
    {
      ...(process.env.GITHUB_OAUTH_TOKEN && {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_OAUTH_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }),
      // data will revalidate every 60 seconds
      next: { revalidate: 60 },
    },
  ).then((res) => res.json());

  return (
    <>
      <div className="z-10 flex h-[80vh] w-full max-w-xl flex-col px-5 xl:px-0">
        <Avatar />
        <h1
          className="animate-fade-up bg-gradient-to-br from-black to-stone-500 bg-clip-text text-center font-display text-4xl font-bold tracking-[-0.02em] text-transparent opacity-0 drop-shadow-sm md:text-7xl md:leading-[5rem]"
          style={{ animationDelay: '0.15s', animationFillMode: 'forwards' }}
        >
          <Balancer>Hi! My name is Paul.</Balancer>
        </h1>
        <p
          className="mt-6 animate-fade-up text-center text-gray-500 opacity-0 md:text-xl"
          style={{ animationDelay: '0.25s', animationFillMode: 'forwards' }}
        >
          <Balancer>
            Digital crafter specializing in Frontend development.
          </Balancer>
        </p>
        <div className="mt-6 flex flex-row items-center justify-center">
          <AnimatedSocialIcons />
        </div>

        <div className="flex flex-1 items-end justify-center">
          <ACard
            layout
            onClick={() => setHasClicked(true)}
            whileHover={{
              width: '80%',
            }}
            // data-isOpen={isOpen}
            className={`group bg-slate-50 ${hasClicked ?? 'w-4/5'}`}
          >
            <CardHeader>
              <CardTitle className="text-gray-600">Ask me a question</CardTitle>
              <CardDescription className="hidden group-hover:block">
                An LLM trained on custom information about myself
              </CardDescription>
            </CardHeader>
            <CardContent className="hidden animate-slide-down-fade transition-all group-hover:block">
              <form>
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="name">Question</Label>
                  <Input
                    id="name"
                    placeholder="What is your favorite framework?"
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="ghost">Not Now</Button>
              <Button>Ask</Button>
            </CardFooter>
          </ACard>
        </div>

        {/* <div className="flex flex-1 flex-col items-center justify-end">
          <p className="text-gray-700">🇺🇲Tampa, FL</p>
          <small className="text-gray-700">
            <span className="cursor-pointer font-semibold">
              {isDaytime ? '☀️' : '🌙'}
              {time}
            </span>
          </small>
        </div> */}
      </div>

      {/* <div className="my-10 grid w-full max-w-screen-xl animate-fade-up grid-cols-1 gap-5 px-5 md:grid-cols-3 xl:px-0">
        {features.map(({ title, description, demo, large }) => (
          <Card
            key={title}
            title={title}
            description={description}
            demo={
              title === 'Beautiful, reusable components' ? (
                <ComponentGrid />
              ) : (
                demo
              )
            }
            large={large}
          />
        ))}
      </div> */}
    </>
  );
}

const features = [
  {
    title: 'Beautiful, reusable components',
    description:
      'Pre-built beautiful, a11y-first components, powered by [Tailwind CSS](https://tailwindcss.com/), [Radix UI](https://www.radix-ui.com/), and [Framer Motion](https://framer.com/motion)',
    large: true,
  },
  {
    title: 'Performance first',
    description:
      'Built on [Next.js](https://nextjs.org/) primitives like `@next/font` and `next/image` for stellar performance.',
    demo: <WebVitals />,
  },
  {
    title: 'One-click Deploy',
    description:
      'Jumpstart your next project by deploying Precedent to [Vercel](https://vercel.com/) in one click.',
    demo: (
      <a href={DEPLOY_URL}>
        <Image
          src="https://vercel.com/button"
          alt="Deploy with Vercel"
          width={120}
          height={30}
          unoptimized
        />
      </a>
    ),
  },
  {
    title: 'Built-in Auth + Database',
    description:
      'Precedent comes with authentication and database via [Auth.js](https://authjs.dev/) + [Prisma](https://prisma.io/)',
    demo: (
      <div className="flex items-center justify-center space-x-20">
        <Image alt="Auth.js logo" src="/authjs.webp" width={50} height={50} />
        <Image alt="Prisma logo" src="/prisma.svg" width={50} height={50} />
      </div>
    ),
  },
  {
    title: 'Hooks, utilities, and more',
    description:
      'Precedent offers a collection of hooks, utilities, and `@vercel/og`',
    demo: (
      <div className="grid grid-flow-col grid-rows-3 gap-10 p-10">
        <span className="font-mono font-semibold">useIntersectionObserver</span>
        <span className="font-mono font-semibold">useLocalStorage</span>
        <span className="font-mono font-semibold">useScroll</span>
        <span className="font-mono font-semibold">nFormatter</span>
        <span className="font-mono font-semibold">capitalize</span>
        <span className="font-mono font-semibold">truncate</span>
      </div>
    ),
  },
];
