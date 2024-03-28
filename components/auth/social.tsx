'use client';
import React from 'react';
import { Button } from '../ui/button';
import Image from 'next/image';

import githubIcon from '@/public/icon/github-icon.svg';
import googleIcon from '@/public/icon/google-icon.svg';

const Social = () => {
    return (
        <div className="flex w-full flex-col ">
            <div className="py-1 md:flex  ">
                <Button className="mb-2 mr-2 flex w-full justify-center bg-slate-50 py-8 transition  hover:bg-slate-300 hover:transition-all active:bg-slate-100">
                    <Image
                        src={googleIcon}
                        alt="google icon"
                        width={30}
                        height={30}
                        priority
                    />
                    <span className="ml-2 text-slate-600">Account Google</span>
                </Button>
                <Button className="flex w-full justify-center bg-slate-50 py-8 transition hover:bg-slate-300  hover:transition-all active:bg-slate-100">
                    <Image
                        src={githubIcon}
                        alt="github icon"
                        width={30}
                        height={30}
                        priority
                    />
                    <span className="ml-2 text-slate-600">Account github</span>
                </Button>
            </div>
            <div className="flex items-center justify-center">
                <span className="w-full border  border-b-black"></span>
                <p className="mx-1">OR</p>
                <span className="w-full border border-b-black"></span>
            </div>
        </div>
    );
};

export default Social;
