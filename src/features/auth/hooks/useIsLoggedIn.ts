import { useQuery } from "@tanstack/react-query";
import { isLoggedIn as apiIsLoggedIn } from "@/services/apiAuth";

export function useIsLoggedIn() {
    const {
        data: loggedIn,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["isLoggedIn"],
        queryFn: () => apiIsLoggedIn(),
    });

    if (error) console.error(error);

    return { loggedIn, isLoading };
}
