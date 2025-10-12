import SelectWithLabel from "@/ui/molecules/SelectWithLabel";
import SubmitButton from "@/ui/molecules/SubmitButton";

import {
    Controller,
    useForm,
    type FieldValues,
    type SubmitHandler,
} from "react-hook-form";
import { Select } from "@/ui/atoms/Select";

const FavoriteColorForm = () => {
    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm();

    const onSubmit: SubmitHandler<FieldValues> = (formData) => {
        console.log(formData);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
            <Controller
                name="favoriteColor"
                control={control}
                rules={{ required: "Your favorite color is required" }}
                render={({ field }) => (
                    <SelectWithLabel
                        label="Your Favorite Color:"
                        trigger="Pick a color"
                        value={field.value}
                        onValueChange={field.onChange}
                        errors={errors.favoriteColor}
                    >
                        <Select.Item value="purple">Purple</Select.Item>
                        <Select.Item value="yellow">Yellow</Select.Item>
                        <Select.Item value="lime">Lime</Select.Item>
                        <Select.Item value="red">Red</Select.Item>
                        <Select.Item value="lavender">Lavender</Select.Item>
                        <Select.Item value="orange">Orange</Select.Item>
                        <Select.Item value="green">Green</Select.Item>
                    </SelectWithLabel>
                )}
            />

            <SubmitButton text="Confirm" isPending={false} />
        </form>
    );
};

export default FavoriteColorForm;
