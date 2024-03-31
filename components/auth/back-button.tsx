import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

export interface BackButtonProps {
  label: string;
  href: string;
}

export default function BackButton({ label, href }: BackButtonProps) {
  return (
    <div className="flex w-full justify-center">
      <Link href={href} title="back btn">
        <Button className="border-none bg-transparent text-black shadow-none hover:bg-transparent ">
          <div className="flex flex-row items-center">
            {label}
            <p className="mx-3 border-b-2 border-b-blue-950 text-blue-500 hover:text-blue-800 ">
              register
            </p>
          </div>
        </Button>
      </Link>
    </div>
  );
}
