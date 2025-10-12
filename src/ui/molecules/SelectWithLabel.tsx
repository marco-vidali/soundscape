import { Select } from "../atoms/Select";
import { Label } from "../atoms/Label";
import type { PropsWithChildren } from "react";

interface SelectWithLabelProps extends PropsWithChildren {
    label: string;
    trigger: string;
}

const SelectWithLabel = ({
    label,
    trigger,
    children,
    ...otherProps
}: SelectWithLabelProps) => {
    return (
        <div className="flex flex-col gap-1.5">
            <Label>{label}</Label>

            <Select {...otherProps}>
                <Select.Trigger>
                    <Select.Value placeholder={trigger} />
                </Select.Trigger>
                <Select.Content>
                    <Select.Group>{children}</Select.Group>
                </Select.Content>
            </Select>
        </div>
    );
};

export default SelectWithLabel;
