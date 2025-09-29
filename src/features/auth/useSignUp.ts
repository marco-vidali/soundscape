import { useMutation } from "@tanstack/react-query";
import { signUp as apiSignUp } from "../../services/apiAuth";

export function useSignUp() {
    const { mutate: signUp, isPending } = useMutation({
        mutationFn: (formData: SignupFormData) => apiSignUp(formData),
        onSuccess: () => console.log("A verification email was sent to you!"),
        onError: (error) => console.error(error),
    });

    return { signUp, isPending };
}
