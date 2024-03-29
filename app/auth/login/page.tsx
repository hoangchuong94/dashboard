import LoginForm from '@/components/auth/login-form';

export default async function LoginPage() {
    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-slate-600 px-4">
            <LoginForm />
        </div>
    );
}
