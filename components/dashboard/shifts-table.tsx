import React from 'react';
import { shiftsList } from '@/data/placeholder';
import { columns } from '../table/comlums';
import { DataTable } from '../table/data-table';

export default function PersonnelList() {
  return <DataTable columns={columns} data={shiftsList} />;
}
