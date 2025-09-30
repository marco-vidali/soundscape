/// <reference types="vite/client" />

type SignupFormData = {
    email: string;
    password: string;
    confirmPassword: string;
};

type ProfileCreationFormData = {
    displayName: string;
    username: string;
};

type LoginFormData = {
    email: string;
    password: string;
};
