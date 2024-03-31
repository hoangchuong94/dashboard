'use client';

import { Column, ColumnDef } from '@tanstack/react-table';
import { MoreHorizontal, ArrowUpDown } from 'lucide-react';
import ShiftsTable from '@/components/dashboard/shifts-table';
import { Button } from '@/components/ui/button';

import { Shifts } from '@/types';
import Image from 'next/image';

import * as React from 'react';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from '@/components/ui/drawer';

export const columns: ColumnDef<Shifts>[] = [
  {
    accessorKey: 'image',

    header: 'Avatar',
    cell: ({ row }) => {
      return (
        <Image
          className="mr-2 rounded-full"
          src={row.original.image}
          width={50}
          height={50}
          alt={row.original.name}
          priority
        />
      );
    },
  },
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="flex cursor-pointer items-center"
        >
          Name
          <span>
            <ArrowUpDown className="ml-3 h-4 w-4 text-slate-300" />
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'email',
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="flex cursor-pointer items-center"
        >
          Email
          <span>
            <ArrowUpDown className="ml-3 h-4 w-4 text-slate-300" />
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'start_time',
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="flex cursor-pointer items-center"
        >
          Start Time
          <span>
            <ArrowUpDown className="ml-3 h-4 w-4 text-slate-300" />
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'end_time',
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="flex cursor-pointer items-center"
        >
          End Time
          <span>
            <ArrowUpDown className="ml-3 h-4 w-4 text-slate-300" />
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'sessions',
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="flex cursor-pointer items-center"
        >
          Sessions
          <span>
            <ArrowUpDown className="ml-3 h-4 w-4 text-slate-300" />
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: 'day_off_number',
    header: ({ column }) => {
      return (
        <div
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          className="flex cursor-pointer items-center"
        >
          Day Off
          <span>
            <ArrowUpDown className="ml-3 h-4 w-4 text-slate-300" />
          </span>
        </div>
      );
    },
  },
  {
    id: 'actions',
    header: 'Show Details',
    cell: ({ row }) => {
      const name = row.original;

      return (
        <Drawer>
          <DrawerTrigger asChild>
            <Button
              variant="outline"
              onClick={() => navigator.clipboard.writeText(name.id)}
            >
              Open
            </Button>
          </DrawerTrigger>
          <DrawerContent className="fixed inset-0 h-screen bg-slate-500">
            <div className="mx-auto w-full max-w-sm">
              <DrawerHeader>
                <DrawerTitle>Move Goal</DrawerTitle>
                <DrawerDescription>
                  Set your daily activity goal.
                </DrawerDescription>
              </DrawerHeader>
              <div className="absolute inset-0 w-screen bg-slate-500">
                <ShiftsTable />
              </div>
              <DrawerFooter>
                {/* <Button>Submit</Button>
                <DrawerClose asChild>
                  <Button variant="outline">Cancel</Button>
                </DrawerClose> */}
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      );
    },
  },
];
