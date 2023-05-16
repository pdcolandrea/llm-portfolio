'use client';

import { motion } from 'framer-motion';
import { Mail, Linkedin, Github } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '../ui/tooltip';

const AnimatedSocialIcons = () => (
  <>
    {socialMediaLinks.map((social, index) => (
      <TooltipProvider key={social.title}>
        <Tooltip>
          <TooltipTrigger asChild>
            <motion.a
              href={social.href}
              className="mx-2 text-gray-500"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: (index / 2) + 1, type: 'spring' }}
            >
              {social.component}
            </motion.a>
          </TooltipTrigger>
          <TooltipContent>
            <p>{social.title}</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    ))}
  </>
);

export default AnimatedSocialIcons;

const socialMediaLinks = [
  {
    title: 'Email',
    component: <Mail />,
    href: 'mailto://colandrea@gmail.com',
  },
  {
    title: 'Linkedin',
    component: <Linkedin />,
    href: 'https://www.linkedin.com/in/pdcolandrea/',
  },
  {
    title: 'Github',
    component: <Github />,
    href: 'https://github.com/pdcolandrea',
  },
];
