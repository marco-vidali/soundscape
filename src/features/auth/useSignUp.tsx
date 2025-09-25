import { useMutation } from "@tanstack/react-query";
import { signUp as apiSignUp } from "../../services/apiAuth";

export function useSignUp() {
    const { mutate: signUp, isPending } = useMutation({
        mutationFn: (formData: SignUpFormData) => apiSignUp(formData),
        onSuccess: () => console.log("A verification email was sent to you!"),
        onError: () =>
            console.error("An error has occurred while signing you up..."),
    });

    return { signUp, isPending };
}
