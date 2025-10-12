import { Select } from "@/ui/atoms/Select";
import SelectWithLabel from "@/ui/molecules/SelectWithLabel";
import SubmitButton from "@/ui/molecules/SubmitButton";

import { useForm, type FieldValues, type SubmitHandler } from "react-hook-form";

const FavoriteColorForm = () => {
    const { handleSubmit, register } = useForm();

    const onSubmit: SubmitHandler<FieldValues> = (formData) => {
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <SelectWithLabel
                label="Your Favorite Color:"
                trigger="Pick a color"
                {...register("favoriteColor", {
                    required: "Your favorite color is required",
                })}
            >
                <Select.Item value="purple">Purple</Select.Item>
                <Select.Item value="yellow">Yellow</Select.Item>
                <Select.Item value="lime">Lime</Select.Item>
                <Select.Item value="red">Red</Select.Item>
                <Select.Item value="lavender">Lavender</Select.Item>
                <Select.Item value="orange">Orange</Select.Item>
                <Select.Item value="green">Green</Select.Item>
            </SelectWithLabel>

            <SubmitButton text="Confirm" isPending={false} />
        </form>
    );
};

export default FavoriteColorForm;
