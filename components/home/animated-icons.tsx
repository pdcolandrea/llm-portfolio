'use client';

import { motion } from 'framer-motion';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';
import { Mail, Linkedin, Github } from 'lucide-react';

export const AnimatedSocialIcons = () => {
  return (
    <>
      {socialMediaLinks.map((social) => {
        return (
          <TooltipProvider key={social.title}>
            <Tooltip>
              <TooltipTrigger asChild>
                <motion.a
                  href={social.href}
                  className="mx-2 text-gray-500"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  style={{ animationDelay: '0.5s' }}
                >
                  {social.component}
                </motion.a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{social.title}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </>
  );
};

const socialMediaLinks = [
  {
    title: 'Email',
    component: <Mail />,
    href: 'mailto://colandrea@gmail.com',
  },
  {
    title: 'Linkedin',
    component: <Linkedin />,
    href: 'https://linkedin.com/u/pdcolandrea',
  },
  {
    title: 'Github',
    component: <Github />,
    href: 'https://github.com/pdcolandrea',
  },
];
