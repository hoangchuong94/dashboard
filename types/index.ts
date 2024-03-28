export type ErrorLogin = {
    errors?: {
        email?: string[];
        password?: string[];
    };
    message: string | null;
};

export type ErrorRegister = {
    errors?: {
        name?: string[];
        email?: string[];
        password?: string[];
        passwordConfirm?: string[];
    };
    message: string | null;
};
