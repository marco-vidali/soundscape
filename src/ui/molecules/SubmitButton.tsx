import { Button } from "../atoms/Button";
import { Loader } from "../atoms/Loader";

interface SubmitButtonProps {
    text: string;
    isPending: boolean;
}

const SubmitButton = ({ text, isPending }: SubmitButtonProps) => {
    return (
        <Button
            type="submit"
            disabled={isPending}
            className="flex flex-col h-10 justify-center"
        >
            {isPending ? <Loader /> : text}
        </Button>
    );
};

export default SubmitButton;
