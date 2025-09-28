import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useSignUp } from "./useSignUp";
import { useIsUsernameAvailable } from "./useIsUsernameAvailable";

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

        signUp(formData as SignUpFormData);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {/* <div>
                <label>Display Name:</label>
                <input
                    {...register("displayName", {
                        required: "Display Name is required",
                    })}
                />

                {errors.displayName && (
                    <p>{errors.displayName.message as string}</p>
                )}
            </div> */}

            {/* <div>
                <label>Username:</label>
                <input
                    {...register("username", {
                        required: "Username is required",
                        minLength: {
                            value: 3,
                            message:
                                "Username must be at least 3 characters long",
                        },
                    })}
                />

                {errors.username && <p>{errors.username.message as string}</p>}
            </div> */}

            <div>
                <label>Email:</label>
                <input
                    type="email"
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
                <input
                    type="password"
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
                <input
                    type="password"
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

            <button type="submit" disabled={isPending}>
                Sign Up
            </button>

            <p>{isPending ? "Loading..." : ""}</p>
        </form>
    );
};

export default SignupForm;
