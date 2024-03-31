'use client';
import React from 'react';
import { Nav } from './nav';

import {
  ShoppingCart,
  Clock,
  Settings,
  LayoutDashboard,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { Button } from '../ui/button';
import shiftIcon from '@/public/icon/shift-svgrepo-com.svg';

interface Props {}

export default function SideNav({}: Props) {
  const [isCollapsed, setIsCollapsed] = React.useState(false);

  const toggleSideNav = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="flex min-h-[inherit]">
      <div
        className={`min-h-[inherit] py-10 ${!isCollapsed ? 'min-w-48' : ''}`}
      >
        <Nav
          isCollapsed={isCollapsed}
          links={[
            {
              title: 'Dashboard',
              label: '',
              icon: LayoutDashboard,
              variant: 'default',
              href: '/dashboard',
            },
            {
              title: 'Shift Employee',
              label: '',
              icon: Clock,
              variant: 'ghost',
              href: '/dashboard/shifts',
            },
            {
              title: 'Ordrs',
              label: '23',
              icon: ShoppingCart,
              variant: 'ghost',
              href: '/dashboard/Ordrs',
            },
            {
              title: 'Setting',
              label: '',
              icon: Settings,
              variant: 'ghost',
              href: '/dashboard/setting',
            },
          ]}
        />
      </div>

      <div className="relative flex min-h-[inherit] justify-center border-r bg-slate-500">
        <Button
          type="button"
          size="sm"
          onClick={toggleSideNav}
          variant={'secondary'}
          className="absolute mt-2 rounded-full bg-white transition hover:border hover:border-black hover:bg-slate-100"
        >
          {isCollapsed ? (
            <ChevronRight className="text-black" />
          ) : (
            <ChevronLeft className="text-black" />
          )}
          {''}
        </Button>
      </div>
    </div>
  );
}
