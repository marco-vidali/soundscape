import { useMutation } from "@tanstack/react-query";
import { createProfile as apiCreateProfile } from "../../../services/apiProfile";
import { useNavigate } from "react-router-dom";

export function useCreateProfile() {
    const navigate = useNavigate();

    const { mutate: createProfile, isPending } = useMutation({
        mutationFn: (formData: ProfileCreationFormData) =>
            apiCreateProfile(formData),
        onSuccess: () => navigate("/"),
        onError: (error) => console.error(error),
    });

    return { createProfile, isPending };
}
