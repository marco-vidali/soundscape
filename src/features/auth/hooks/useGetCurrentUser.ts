import { useQuery } from "@tanstack/react-query";
import { getCurrentUser as apiGetCurrentUser } from "@/services/apiAuth";

export function useGetCurrentUser() {
    const {
        data: currentUser,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["currentUser"],
        queryFn: () => apiGetCurrentUser(),
    });

    if (error) console.error(error);

    return { currentUser, isLoading };
}
