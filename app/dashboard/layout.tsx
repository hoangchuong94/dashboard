import SideNav from '@/components/dashboard/side-nav';
import PageTitle from '@/components/page-title';
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex md:min-h-[inherit]">
      <SideNav />
      <div className="flex flex-1 flex-col p-10">
        <div>{children}</div>
      </div>
    </main>
  );
}
