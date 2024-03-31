'use client';

import { Button } from '@/components/ui/button';
import Link from 'next/link';
import * as React from 'react';

export default function Home() {
  return (
    <Button>
      <Link href={'/dashboard'}>login</Link>
    </Button>
  );
}
