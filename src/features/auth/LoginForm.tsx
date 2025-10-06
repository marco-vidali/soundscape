import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useLogIn } from "./useLogIn";
import { Input } from "@/components/retroui/Input";
import { Button } from "@/components/retroui/Button";
import { Loader } from "@/components/retroui/Loader";
import { Label } from "@/components/retroui/Label";

const EMAIL_VALIDATION_REGEX = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);

const LoginForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const { logIn, isPending } = useLogIn();

    const onSubmit: SubmitHandler<FieldValues> = (formData) => {
        logIn(formData as LoginFormData);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
                <Label>Email:</Label>
                <Input
                    type="email"
                    placeholder="fantastic@email.com"
                    aria-invalid={!!errors.email}
                    {...register("email", {
                        required: "Email is required...",
                        pattern: {
                            value: EMAIL_VALIDATION_REGEX,
                            message: "Please enter a valid email address...",
                        },
                    })}
                />

                {errors.email && (
                    <p className="text-sm text-destructive">
                        {errors.email.message as string}
                    </p>
                )}
            </div>

            <div className="flex flex-col gap-1.5">
                <Label>Password:</Label>
                <Input
                    type="password"
                    placeholder="••••••••"
                    aria-invalid={!!errors.password}
                    {...register("password", {
                        required: "Password is required...",
                    })}
                />

                {errors.password && (
                    <p className="text-sm text-destructive">
                        {errors.password.message as string}
                    </p>
                )}
            </div>

            <Button
                type="submit"
                disabled={isPending}
                className="flex flex-col h-10 justify-center"
            >
                {isPending ? <Loader /> : "Log In"}
            </Button>
        </form>
    );
};

export default LoginForm;
