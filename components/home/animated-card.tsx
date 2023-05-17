'use client';

import React, { useState } from 'react';
import { Label } from '@radix-ui/react-label';
import { motion } from 'framer-motion';
import { postMessage } from '@/lib/actions';
import { Button } from '../ui/button';
import {
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
  Card,
} from '../ui/card';
import { Input } from '../ui/input';

const ACard = motion(Card);

const AnimatedCard = () => {
  const [hasClicked, setHasClicked] = useState(false);

  return (
    <ACard
      layout
      onClick={() => setHasClicked(true)}
      // whileHover={{
      //   height: 'auto',
      // }}
      // data-isOpen={isOpen}
      className="group w-full bg-slate-50"
    >
      <CardHeader>
        <CardTitle className="text-gray-600">Ask me a question</CardTitle>
        <CardDescription
          className={`hidden group-hover:block ${
            hasClicked ? 'block' : undefined
          }`}
        >
          Join <span className="font-semibold">5 others</span> and ask a custom
          trained LLM a question about me!
        </CardDescription>
      </CardHeader>
      <CardContent
        className={`hidden animate-slide-down-fade transition-all group-hover:block ${
          hasClicked ? 'block' : undefined
        }`}
      >
        <form action={postMessage}>
          <div className="flex flex-col space-y-1.5">
            <Label htmlFor="name">Question</Label>
            <Input
              id="prompt"
              alt="LLM prompt"
              type="text"
              placeholder="What is your favorite framework?"
            />
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="ghost">Not Now</Button>
        <Button type="submit">Ask</Button>
      </CardFooter>
    </ACard>
  );
};

export default AnimatedCard;
