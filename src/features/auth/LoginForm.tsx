import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useLogIn } from "./useLogIn";

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
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    {...register("email", {
                        required: "Email is required...",
                        pattern: {
                            value: EMAIL_VALIDATION_REGEX,
                            message: "Please enter a valid email address...",
                        },
                    })}
                />

                {errors.email && <p>{errors.email.message as string}</p>}
            </div>

            <div>
                <label>Password:</label>
                <input
                    type="password"
                    {...register("password", {
                        required: "Password is required...",
                    })}
                />

                {errors.password && <p>{errors.password.message as string}</p>}
            </div>

            <button type="submit" disabled={isPending}>
                Log In
            </button>

            {isPending && <p>Loading...</p>}
        </form>
    );
};

export default LoginForm;
