import React from 'react';
import { lusitana } from '@/lib/font';
export interface HeaderProps {
    label: string;
}
const Header = ({ label }: HeaderProps) => {
    return (
        <div>
            <div className="flex h-20 w-full items-end rounded-lg">
                <div className="w-32 text-white md:w-36 ">
                    <h1>logo</h1>
                </div>
            </div>
            <h1
                className={`${lusitana.className} border-b-[1px] border-b-black py-4 text-center text-4xl text-zinc-800`}
            >
                {label}
            </h1>
        </div>
    );
};

export default Header;
