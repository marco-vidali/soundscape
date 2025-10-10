import FullScreenLoader from "@/ui/molecules/FullScreenLoader";

import { useEffect, type PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCurrentUser } from "@/features/auth/hooks/useGetCurrentUser";
import { useGetProfile } from "@/features/profile/hooks/useGetProfile";

interface ProfileProtectedRouteProps extends PropsWithChildren {}

const ProfileProtectedRoute = ({ children }: ProfileProtectedRouteProps) => {
    const navigate = useNavigate();

    const { currentUser, isLoading: isUserLoading } = useGetCurrentUser();

    const userId = currentUser?.user.id ?? "";
    const { profile, isLoading: isProfileLoading } = useGetProfile(userId);

    useEffect(() => {
        if (!isUserLoading && !isProfileLoading && !!!profile) {
            navigate("/profile/create");
        }
    }, [profile, isUserLoading, isProfileLoading, navigate]);

    if (isUserLoading || isProfileLoading) return <FullScreenLoader />;

    return children;
};

export default ProfileProtectedRoute;
