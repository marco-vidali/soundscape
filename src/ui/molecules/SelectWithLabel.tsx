import { Select } from "../atoms/Select";
import { Label } from "../atoms/Label";
import type { PropsWithChildren } from "react";
import type { FieldErrors } from "react-hook-form";
import clsx from "clsx";

interface SelectWithLabelProps extends PropsWithChildren {
    label: string;
    trigger: string;
    value: string;
    onValueChange: (value: string) => void;
    errors: FieldErrors[string];
}

const SelectWithLabel = ({
    label,
    trigger,
    value,
    onValueChange,
    errors,
    children,
    ...otherProps
}: SelectWithLabelProps) => {
    return (
        <div className="flex flex-col gap-1.5">
            <Label>{label}</Label>

            <Select value={value} onValueChange={onValueChange} {...otherProps}>
                <Select.Trigger
                    className={clsx(
                        errors &&
                            "text-destructive border-destructive shadow-none"
                    )}
                >
                    <Select.Value placeholder={trigger} />
                </Select.Trigger>
                <Select.Content>
                    <Select.Group>{children}</Select.Group>
                </Select.Content>
            </Select>

            {errors && (
                <p className="text-sm text-destructive">
                    {errors.message as string}
                </p>
            )}
        </div>
    );
};

export default SelectWithLabel;
