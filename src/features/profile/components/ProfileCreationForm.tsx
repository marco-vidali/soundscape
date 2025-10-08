import InputWithLabel from "@/ui/molecules/InputWithLabel";
import SubmitButton from "@/ui/molecules/SubmitButton";

import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useCreateProfile } from "../hooks/useCreateProfile";
import { useIsUsernameAvailable } from "../hooks/useIsUsernameAvailable";

const ProfileCreationForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
        watch,
        setError,
    } = useForm();

    const username = watch("username");
    const { isUsernameAvailable } = useIsUsernameAvailable(username);

    const { createProfile, isPending } = useCreateProfile();

    const onSubmit: SubmitHandler<FieldValues> = (formData) => {
        if (!isUsernameAvailable) {
            setError("username", {
                message: "This username is already in use...",
            });

            return;
        }

        createProfile(formData as ProfileCreationFormData);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <InputWithLabel
                label="Display Name:"
                placeholder="Ray Toro"
                errors={errors.displayName}
                {...register("displayName", {
                    required: "Display Name is required",
                })}
            />

            <InputWithLabel
                label="Username:"
                placeholder="raytoro"
                errors={errors.username}
                {...register("username", {
                    required: "Username is required",
                    minLength: {
                        value: 3,
                        message: "Username must be at least 3 characters long",
                    },
                })}
            />

            <SubmitButton text="Create Profile" isPending={isPending} />
        </form>
    );
};

export default ProfileCreationForm;
