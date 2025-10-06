import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";
import { useCreateProfile } from "./useCreateProfile";
import { useIsUsernameAvailable } from "./useIsUsernameAvailable";
import { Label } from "@/components/retroui/Label";
import { Input } from "@/components/retroui/Input";
import { Button } from "@/components/retroui/Button";
import { Loader } from "@/components/retroui/Loader";
import { toast } from "sonner";

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
            toast.error("This username is already in use...");
            return;
        }

        createProfile(formData as ProfileCreationFormData);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <div className="flex flex-col gap-1.5">
                <Label>Display Name:</Label>
                <Input
                    placeholder="Jonny Greenwood"
                    aria-invalid={!!errors.displayName}
                    {...register("displayName", {
                        required: "Display Name is required",
                    })}
                />

                {errors.displayName && (
                    <p className="text-sm text-destructive">
                        {errors.displayName.message as string}
                    </p>
                )}
            </div>

            <div className="flex flex-col gap-1.5">
                <Label>Username:</Label>
                <Input
                    placeholder="jonnygreenwood"
                    aria-invalid={!!errors.username}
                    {...register("username", {
                        required: "Username is required",
                        minLength: {
                            value: 3,
                            message:
                                "Username must be at least 3 characters long",
                        },
                    })}
                />

                {errors.username && (
                    <p className="text-sm text-destructive">
                        {errors.username.message as string}
                    </p>
                )}
            </div>

            <Button
                type="submit"
                disabled={isPending}
                className="flex flex-col h-10 justify-center"
            >
                {isPending ? <Loader /> : "Create"}
            </Button>
        </form>
    );
};

export default ProfileCreationForm;
