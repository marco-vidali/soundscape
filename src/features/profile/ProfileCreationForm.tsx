import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useCreateProfile } from "./useCreateProfile";

const ProfileCreationForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const { createProfile, isPending } = useCreateProfile();

    const onSubmit: SubmitHandler<FieldValues> = (formData) => {
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
