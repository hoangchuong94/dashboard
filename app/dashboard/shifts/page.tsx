import React, { Suspense } from 'react';
import ShiftsTable from '@/components/dashboard/shifts-table';
import PageTitle from '@/components/page-title';
import Skeleton from '@/components/Skeleton';

export default function ShiftPage() {
  return (
    <>
      <PageTitle label="Shifts" />
      <ShiftsTable />
    </>
  );
}
