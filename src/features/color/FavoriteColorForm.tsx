import InputWithLabel from "@/ui/molecules/InputWithLabel";
import SubmitButton from "@/ui/molecules/SubmitButton";

import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

const FavoriteColorForm = () => {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();

    const onSubmit: SubmitHandler<FieldValues> = (formData) => {
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <InputWithLabel
                label="Your Favorite Color:"
                type="text"
                placeholder="#0f0f12"
                errors={errors.favoriteColor}
                {...register("favoriteColor", {
                    required: "Your favorite color is required",
                })}
            />

            <SubmitButton text="Confirm" isPending={false} />
        </form>
    );
};

export default FavoriteColorForm;
