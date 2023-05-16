'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const Avatar = () => {
  return (
    <motion.div
      drag
      dragConstraints={{ left: -50, top: -50, right: 50, bottom: 100 }}
      className="relative mx-auto mb-4 lg:h-36 lg:w-36 w-24 h-24 rounded-full bg-gray-300 backdrop-blur-3xl"
      dragSnapToOrigin
    >
      <Image
        src="/avatar.png"
        alt="avatar"
        width={240}
        height={320}
        className="absolute bottom-0 lg:scale-[1.7] scale-[1.5]"
      />
    </motion.div>
  );
};

export default Avatar;
