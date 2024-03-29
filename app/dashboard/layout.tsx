import SideNav from '@/components/dashboard/side-nav';
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="min-h-screen w-full bg-white text-black">
            <div className="flex min-h-[inherit]">
                <SideNav />
                <div className="flex-1 px-5">{children}</div>
            </div>
        </main>
    );
}
