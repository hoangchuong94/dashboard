import {
    CardsSkeleton,
    LatestInvoicesSkeleton,
    RevenueChartSkeleton,
} from '@/components/skeletons/skeletons';
import React, { Suspense } from 'react';
import CardWrapper from '@/components/dashboard/cards';
import RevenueChart from '@/components/dashboard/revenue-chart';
import LatestInvoices from '@/components/dashboard/latest-invoices';

const DashboardPage = () => {
    return (
        <div>
            <h1 className={'mb-4 text-center text-xl md:text-2xl'}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div>
        </div>
    );
};

export default DashboardPage;
