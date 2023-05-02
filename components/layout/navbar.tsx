'use client';

import Image from 'next/image';
import Link from 'next/link';
import useScroll from '@/lib/hooks/use-scroll';
import { Session } from 'next-auth';
import { File } from 'lucide-react';
import { useSignInModal } from './sign-in-modal';
import UserDropdown from './user-dropdown';

export default function NavBar({ session }: { session: Session | null }) {
  const { SignInModal, setShowSignInModal } = useSignInModal();
  const scrolled = useScroll(50);

  return (
    <>
      <SignInModal />
      <div
        className={`fixed top-0 w-full ${
          scrolled
            ? 'border-b border-gray-200 bg-white/50 backdrop-blur-xl'
            : 'bg-white/0'
        } z-30 transition-all`}
      >
        <div className="mx-5 flex h-16 max-w-screen-xl items-center justify-between xl:mx-auto">
          <Link href="/" className="flex items-center font-display text-2xl">
            <Image
              src="/logo.png"
              alt="Precedent logo"
              width="30"
              height="30"
              className="mr-2 rounded-sm"
            />
            <p>paul.dev</p>
          </Link>
          <div className="flex flex-row">
            {session ? (
              <UserDropdown session={session} />
            ) : (
              <button
                className="rounded-full border border-black bg-black p-1.5 px-4 text-sm text-white transition-all hover:bg-white hover:text-black"
                onClick={() => setShowSignInModal(true)}
              >
                Contact Me
              </button>
            )}
            <span className="ml-2 rounded-full border-2 border-black p-2 ">
              <File className="" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
