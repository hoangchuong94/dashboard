export type CardData = {
    numberOfCustomers: number;
    numberOfInvoices: number;
    totalPaidInvoices: string;
    totalPendingInvoices: string;
};

export type Revenue = {
    month: string;
    revenue: number;
};

export enum Month {
    Jan = 'Jan',
    Feb = 'Feb',
    Mar = 'Mar',
    Apr = 'Apr',
    May = 'May',
    Jun = 'Jun',
    Jul = 'Jul',
    Aug = 'Aug',
    Sep = 'Sep',
    Oct = 'Oct',
    Nov = 'Nov',
    Dec = 'Dec',
}

export type Customer = {
    name: string;
    email: string;
    imageUrl: string;
};

export type LatestInvoices = {
    amount: string;
    id: string;
    createdAt: Date;
    customer: Customer;
};
