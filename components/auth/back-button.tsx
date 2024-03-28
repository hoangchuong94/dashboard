import React from 'react';
import { Button } from '../ui/button';
import Link from 'next/link';

export interface BackButtonProps {
    label: string;
    href: string;
}

const BackButton = ({ label, href }: BackButtonProps) => {
    return (
        <div className="flex w-full justify-center">
            <Button className="border-none bg-transparent text-black shadow-none hover:bg-transparent hover:text-blue-400">
                <Link href={href} title="back btn">
                    {label}
                </Link>
            </Button>
        </div>
    );
};

export default BackButton;
