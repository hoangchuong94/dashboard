import Image from 'next/image';
import bgRegisterPage from '/public/static/auth/bg-registration-form-1.jpg';

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <main className="relative min-h-screen w-full">
            <div className="absolute inset-0">
                <Image
                    className="object-cover"
                    src={bgRegisterPage}
                    alt="bg-register-page"
                    quality={100}
                    fill
                    priority
                    sizes="100vw"
                />
            </div>

            <div className="absolute inset-0 flex items-center justify-center">
                {children}
            </div>
        </main>
    );
}
