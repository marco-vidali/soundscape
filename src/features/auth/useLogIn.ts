import { useMutation } from "@tanstack/react-query";
import { logIn as apiLogIn } from "../../services/apiAuth";
import { useNavigate } from "react-router-dom";

export function useLogIn() {
    const navigate = useNavigate();

    const { mutate: logIn, isPending } = useMutation({
        mutationFn: (formData: LoginFormData) => apiLogIn(formData),
        onSuccess: () => navigate("/"),
        onError: (error) => console.error(error),
    });

    return { logIn, isPending };
}
