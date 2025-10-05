import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useSignUp } from "./useSignUp";
import { useIsUsernameAvailable } from "../profile/useIsUsernameAvailable";
import { Input } from "@/components/retroui/Input";
import { Label } from "@radix-ui/react-label";
import { Button } from "@/components/retroui/Button";

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
            <div>
                <Label>Email:</Label>
                <Input
                    type="email"
                    placeholder="fantastic@email.com"
                    {...register("email", {
                        required: "Email is required",
                        pattern: {
                            value: EMAIL_VALIDATION_REGEX,
                            message: "Please enter a valid email address",
                        },
                    })}
                />

                {errors.email && <p>{errors.email.message as string}</p>}
            </div>

            <div>
                <label>Password:</label>
                <Input
                    type="password"
                    placeholder="••••••••"
                    {...register("password", {
                        required: "Password is required",
                        minLength: {
                            value: 8,
                            message:
                                "Password must be at least 8 characters long",
                        },
                    })}
                />

                {errors.password && <p>{errors.password.message as string}</p>}
            </div>

            <div>
                <label>Confirm Password:</label>
                <Input
                    type="password"
                    placeholder="••••••••"
                    {...register("confirmPassword", {
                        validate: (value) =>
                            value === watch("password") ||
                            "Passwords do not match",
                    })}
                />

                {errors.confirmPassword && (
                    <p>{errors.confirmPassword.message as string}</p>
                )}
            </div>

            <Button
                type="submit"
                disabled={isPending}
                className="flex flex-col"
            >
                Sign Up
            </Button>

            <p>{isPending ? "Loading..." : ""}</p>
        </form>
    );
};

export default SignupForm;
