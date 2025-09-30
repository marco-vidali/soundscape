import { useQuery } from "@tanstack/react-query";
import { hasProfile as apiHasProfile } from "../../services/apiProfile";

export function useHasProfile(userId: string) {
    const {
        data: hasProfile,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["hasProfile", userId],
        queryFn: ({ queryKey }) => apiHasProfile(queryKey[1] as string),
    });

    if (error) console.error(error);

    return { hasProfile, isLoading };
}
