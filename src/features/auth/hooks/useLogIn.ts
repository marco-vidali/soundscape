import { useMutation } from "@tanstack/react-query";
import { logIn as apiLogIn } from "@/services/apiAuth";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

export function useLogIn() {
    const navigate = useNavigate();

    const { mutate: logIn, isPending } = useMutation({
        mutationFn: (formData: LoginFormData) => apiLogIn(formData),
        onSuccess: () => navigate("/"),
        onError: (error) => {
            toast.error("Your email or password is incorrect...");
            console.error(error);
        },
    });

    return { logIn, isPending };
}
