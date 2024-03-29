'use client';

import Link from 'next/link';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { KeyIcon, UserIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import z from 'zod';
import { useForm } from 'react-hook-form';
import { useState, useTransition } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';

import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { LoginSchema } from '@/schema/index';
import CardWrapper from '@/components/auth/card-wrapper';
import FormError from './form-error';

const LoginForm = () => {
    const [errorMessage, setErrorMessage] = useState<string>();

    const form = useForm<z.infer<typeof LoginSchema>>({
        resolver: zodResolver(LoginSchema),
        defaultValues: {
            username: '',
            password: '',
        },
    });

    const [isPending, startTransaction] = useTransition();

    const onSubmit = (values: z.infer<typeof LoginSchema>) => {
        const formValid = LoginSchema.safeParse({
            email: values.username,
            password: values.password,
        });

        if (!formValid.success) {
            const data = fetchData(values.username, values.password);
            return data;
        }
        setErrorMessage('form validation error');
    };
    const fetchData = async (email: string, password: string) => {
        try {
            const response = await fetch(
                'http://60.75.209.140:8000/api/version/v1/login/1',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        user_name: email,
                        password: password,
                    }),
                },
            );
            const data = await response.json();
            return data;
        } catch (error) {
            setErrorMessage('some thing went wrong');
        }
    };

    return (
        <CardWrapper
            headerLabel="Login"
            backButtonLabel="Do not an account ?"
            backButtonHref="/auth/register"
            showSocial
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="flex border-spacing-5 flex-col"
                >
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <div className="my-2 border-b-[1px] border-b-black">
                                    <FormLabel className="flex flex-row-reverse items-center justify-center">
                                        <UserIcon className="h-6 w-6 text-sm text-black hover:cursor-pointer " />

                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                placeholder="Enter username"
                                                type="text"
                                                className="border-none py-6 text-base text-zinc-800 shadow-none transition-none focus-visible:ring-0"
                                            />
                                        </FormControl>
                                    </FormLabel>
                                </div>
                                <FormMessage className="mx-3" />
                            </FormItem>
                        )}
                    />
                    <FormField
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <div className="my-2 border-b-[1px] border-b-black">
                                    <FormLabel className="flex flex-row-reverse items-center justify-center">
                                        <KeyIcon className="h-6 w-6 text-sm text-black hover:cursor-pointer " />
                                        <FormControl>
                                            <Input
                                                {...field}
                                                disabled={isPending}
                                                placeholder="Enter you password"
                                                type="password"
                                                className="border-none py-6 text-base text-zinc-800 shadow-none transition-none focus-visible:ring-0"
                                            />
                                        </FormControl>
                                    </FormLabel>
                                </div>
                                <FormMessage className="mx-3" />
                            </FormItem>
                        )}
                    />

                    <LoginButton />
                    {errorMessage && (
                        <FormError status="error" message={errorMessage} />
                    )}
                </form>
            </Form>
        </CardWrapper>
    );
};

function LoginButton() {
    const pending = false;

    return (
        <Button
            className={`mb-2 mt-8 w-full active:bg-blue-500 ${!pending && 'bg-gray-700'}`}
            aria-disabled={pending}
            disabled={pending}
            type="submit"
        >
            {pending ? (
                <p>Loading...</p>
            ) : (
                <>
                    <p>Login</p>
                    <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
                </>
            )}
        </Button>
    );
}

function RegisterButton() {
    return (
        <Link href={'/auth/register'}>
            <Button className="mt-2 w-full bg-gray-700" type="button">
                Register
                <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50" />
            </Button>
        </Link>
    );
}

export default LoginForm;
