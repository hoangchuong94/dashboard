import { CardData, Revenue, Month, Customer, LatestInvoices } from '@/types';

export const cardData = {
    numberOfCustomers: 100,
    numberOfInvoices: 100,
    totalPaidInvoices: '100',
    totalPendingInvoices: '100',
} as CardData;

export const revenues: Revenue[] = [
    { month: Month[Month.Jan], revenue: 1000 },
    { month: Month[Month.Feb], revenue: 1500 },
    { month: Month[Month.Mar], revenue: 2000 },
    { month: Month[Month.Apr], revenue: 1800 },
    { month: Month[Month.May], revenue: 2200 },
    { month: Month[Month.Jun], revenue: 2500 },
    { month: Month[Month.Jul], revenue: 2100 },
    { month: Month[Month.Aug], revenue: 2700 },
    { month: Month[Month.Sep], revenue: 3000 },
    { month: Month[Month.Oct], revenue: 2800 },
    { month: Month[Month.Nov], revenue: 3200 },
    { month: Month[Month.Dec], revenue: 3500 },
];

const customer1: Customer = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    imageUrl: '/customers/amy-burns.png',
};

const customer2: Customer = {
    name: 'Jane Smith 1',
    email: 'jane.smith@example.com',
    imageUrl: '/customers/balazs-orban.png',
};

const customer3: Customer = {
    name: 'Jane Smith 2',
    email: 'jane.smith@example.com',
    imageUrl: '/customers/delba-de-oliveira.png',
};

const customer4: Customer = {
    name: 'Jane Smith 2',
    email: 'jane.smith@example.com',
    imageUrl: '/customers/emil-kowalski.png',
};

const customer5: Customer = {
    name: 'Jane Smith 2',
    email: 'jane.smith@example.com',
    imageUrl: '/customers/evil-rabbit.png',
};

export const latestInvoices: LatestInvoices[] = [
    {
        amount: '$100',
        id: 'INV-001',
        createdAt: new Date(),
        customer: customer1,
    },
    {
        amount: '$200',
        id: 'INV-002',
        createdAt: new Date(),
        customer: customer2,
    },
    {
        amount: '$150',
        id: 'INV-003',
        createdAt: new Date(),
        customer: customer3,
    },
    {
        amount: '$150',
        id: 'INV-003',
        createdAt: new Date(),
        customer: customer4,
    },
    {
        amount: '$150',
        id: 'INV-003',
        createdAt: new Date(),
        customer: customer5,
    },
];
