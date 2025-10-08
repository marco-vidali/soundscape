import InputWithLabel from "@/ui/molecules/InputWithLabel";

import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useSignUp } from "../hooks/useSignUp";
import { useIsUsernameAvailable } from "../../profile/hooks/useIsUsernameAvailable";
import { Input } from "@/ui/atoms/Input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/ui/atoms/Button";
import { Loader } from "@/ui/atoms/Loader";

const EMAIL_VALIDATION_REGEX = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);

const SignupForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
        watch,
    } = useForm();

    const { signUp, isPending } = useSignUp();

    const username = watch("username");
    const { isUsernameAvailable } = useIsUsernameAvailable(username);

    const onSubmit: SubmitHandler<FieldValues> = (formData) => {
        if (!isUsernameAvailable) {
            console.error("The username is already in use...");
            return;
        }

        signUp(formData as SignupFormData);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <InputWithLabel
                label="Email:"
                type="email"
                placeholder="fantastic@email.com"
                errors={errors.email}
                {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: EMAIL_VALIDATION_REGEX,
                        message: "Please enter a valid email address",
                    },
                })}
            />

            <InputWithLabel
                label="Password:"
                type="password"
                placeholder="••••••••"
                errors={errors.password}
                {...register("password", {
                    required: "Password is required",
                    minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters long",
                    },
                })}
            />

            <InputWithLabel
                label="Confirm Password:"
                type="password"
                placeholder="••••••••"
                errors={errors.confirmPassword}
                {...register("confirmPassword", {
                    required: "Password confirmation is required",
                    validate: (value) =>
                        value === watch("password") || "Passwords do not match",
                })}
            />

            <Button
                type="submit"
                disabled={isPending}
                className="flex flex-col h-10 justify-center"
            >
                {isPending ? <Loader /> : "Sign Up"}
            </Button>
        </form>
    );
};

export default SignupForm;
