import { useQuery } from "@tanstack/react-query";
import { getProfile as apiGetProfile } from "../../services/apiProfile";

export function useGetProfile(userId: string) {
    const {
        data: profile,
        isLoading,
        error,
    } = useQuery({
        queryKey: ["profile", userId],
        queryFn: ({ queryKey }) => apiGetProfile(queryKey[1] as string),
    });

    if (error) console.error(error);

    return { profile, isLoading };
}
