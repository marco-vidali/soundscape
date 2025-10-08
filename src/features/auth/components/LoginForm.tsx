import SubmitButton from "@/ui/molecules/SubmitButton";
import InputWithLabel from "@/ui/molecules/InputWithLabel";

import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useLogIn } from "../hooks/useLogIn";

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
            <InputWithLabel
                label="Email:"
                type="email"
                placeholder="fantastic@email.com"
                errors={errors.email}
                {...register("email", {
                    required: "Email is required...",
                    pattern: {
                        value: EMAIL_VALIDATION_REGEX,
                        message: "Please enter a valid email address...",
                    },
                })}
            />

            <InputWithLabel
                label="Password:"
                type="password"
                placeholder="••••••••"
                errors={errors.password}
                {...register("password", {
                    required: "Password is required...",
                })}
            />

            <SubmitButton text="Log In" isPending={isPending} />
        </form>
    );
};

export default LoginForm;
