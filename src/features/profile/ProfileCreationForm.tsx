import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useCreateProfile } from "./useCreateProfile";
import { useIsUsernameAvailable } from "./useIsUsernameAvailable";

const ProfileCreationForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
        watch,
    } = useForm();

    const { createProfile, isPending } = useCreateProfile();

    const username = watch("username");
    const { isUsernameAvailable } = useIsUsernameAvailable(username);

    const onSubmit: SubmitHandler<FieldValues> = (formData) => {
        if (!isUsernameAvailable) {
            console.error("This username is already in use...");
            return;
        }

        createProfile(formData as ProfileCreationFormData);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Display Name:</label>
                <input
                    {...register("displayName", {
                        required: "Display Name is required",
                    })}
                />

                {errors.displayName && (
                    <p>{errors.displayName.message as string}</p>
                )}
            </div>

            <div>
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
            </div>

            <button type="submit" disabled={isPending}>
                Create
            </button>

            <p>{isPending ? "Loading..." : ""}</p>
        </form>
    );
};

export default ProfileCreationForm;
