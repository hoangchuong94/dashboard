'use client';
import React from 'react';
import { Nav } from './nav';

import {
    ShoppingCart,
    UserRound,
    Settings,
    LayoutDashboard,
    ChevronLeft,
    ChevronRight,
} from 'lucide-react';
import { notFound, usePathname } from 'next/navigation';
import { Button } from '../ui/button';

interface Props {}

const SideNav = ({}: Props) => {
    const [isCollapsed, setIsCollapsed] = React.useState(false);

    const toggleSideNav = () => {
        setIsCollapsed(!isCollapsed);
    };
    const pathName = usePathname();
    if (!pathName) {
        notFound();
    }

    return (
        <div className="relative flex min-w-28 flex-col items-center justify-start border-r px-3 pb-10 pt-10">
            <div className="absolute right-[-32px] top-0 p-2">
                <Button
                    size="sm"
                    onClick={toggleSideNav}
                    className="bg-transparent"
                >
                    {isCollapsed ? (
                        <ChevronRight className="text-gray-500" />
                    ) : (
                        <ChevronLeft className="text-gray-500" />
                    )}
                </Button>
            </div>
            <Nav
                isCollapsed={isCollapsed}
                links={[
                    {
                        title: 'Dashboard',
                        label: '128',
                        icon: LayoutDashboard,
                        variant: 'default',
                        href: '/dashboard',
                    },
                    {
                        title: 'User',
                        label: '9',
                        icon: UserRound,
                        variant: 'ghost',
                        href: '/dashboard/user',
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
    );
};

export default SideNav;
