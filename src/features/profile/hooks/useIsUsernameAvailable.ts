import { useQuery } from "@tanstack/react-query";
import { isUsernameAvailable as apiIsUsernameAvailable } from "@/services/apiProfile";

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

    if (error) console.error(error);

    return { isUsernameAvailable, isLoading };
}
