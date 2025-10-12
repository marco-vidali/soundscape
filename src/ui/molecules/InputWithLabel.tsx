import { Label } from "../atoms/Label";
import { Input } from "../atoms/Input";
import type { FieldErrors } from "react-hook-form";

interface InputWithLabelProps {
    label: string;
    type?: string;
    placeholder?: string;
    errors: FieldErrors[string];
}

const InputWithLabel = ({
    label,
    type,
    placeholder,
    errors,
    ...otherProps
}: InputWithLabelProps) => {
    return (
        <div className="flex flex-col gap-1.5">
            <Label>{label}</Label>
            <Input
                type={type}
                placeholder={placeholder}
                aria-invalid={!!errors}
                {...otherProps}
            />

            {errors && (
                <p className="text-sm text-destructive">
                    {errors.message as string}
                </p>
            )}
        </div>
    );
};

export default InputWithLabel;
