import type { Metadata } from 'next';
import { marcellus } from '@/lib/font';
import './globals.css';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(marcellus.className, {
          'debug-screens': process.env.NODE_ENV === 'development',
        })}
      >
        {children}
      </body>
    </html>
  );
}
