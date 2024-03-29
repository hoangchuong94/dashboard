import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <main className="flex min-h-screen w-full items-center justify-center">
            <Link href={'/dashboard'}>
                <Button className="bg-sky-500" size="lg">
                    login
                </Button>
            </Link>
        </main>
    );
}
