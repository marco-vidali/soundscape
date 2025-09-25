import { useQuery } from "@tanstack/react-query";
import { isUsernameAvailable as apiIsUsernameAvailable } from "../../services/apiAuth";

export function useUser(username: string) {
    const { data: isUsernameAvailable, isLoading } = useQuery({
        queryFn: ({ queryKey }) =>
            apiIsUsernameAvailable(queryKey[1] as string),
        queryKey: ["isUsernameAvailable", username],
    });

    return { isUsernameAvailable, isLoading };
}
