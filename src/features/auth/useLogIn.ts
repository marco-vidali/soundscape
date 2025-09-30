import { useMutation } from "@tanstack/react-query";
import { logIn as apiLogIn } from "../../services/apiAuth";

export function useLogIn() {
    const { mutate: logIn, isPending } = useMutation({
        mutationFn: (formData: LoginFormData) => apiLogIn(formData),
        onSuccess: () => console.log("Logged in successfully!"),
        onError: (error) => console.error(error),
    });

    return { logIn, isPending };
}
