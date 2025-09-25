import { useQuery } from "@tanstack/react-query";
import { isUsernameAvailable as apiIsUsernameAvailable } from "../../services/apiAuth";

export function useIsUsernameAvailable(username: string) {
    const {
        data: isUsernameAvailable,
        isLoading,
        error,
    } = useQuery({
        queryFn: ({ queryKey }) =>
            apiIsUsernameAvailable(queryKey[1] as string),
        queryKey: ["isUsernameAvailable", username],
    });

    return { isUsernameAvailable, isLoading, error };
}
