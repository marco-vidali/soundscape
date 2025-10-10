import FullScreenLoader from "@/ui/molecules/FullScreenLoader";

import { useEffect, type PropsWithChildren } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCurrentUser } from "@/features/auth/hooks/useGetCurrentUser";
import { useGetProfile } from "@/features/profile/hooks/useGetProfile";

interface ProfileProtectedRouteProps extends PropsWithChildren {
    inverted?: boolean;
}

const ProfileProtectedRoute = ({
    children,
    inverted = false,
}: ProfileProtectedRouteProps) => {
    const navigate = useNavigate();

    const { currentUser, isLoading: isUserLoading } = useGetCurrentUser();

    const userId = currentUser?.user.id ?? "";
    const { profile, isLoading: isProfileLoading } = useGetProfile(userId);

    useEffect(() => {
        if (isUserLoading || isProfileLoading) return;

        if (!inverted && !!!profile) navigate("/profile/create");
        if (inverted && !!profile) navigate("/");
    }, [profile, isUserLoading, isProfileLoading, navigate]);

    if (isUserLoading || isProfileLoading) return <FullScreenLoader />;

    if (!inverted && !profile) return null;
    if (inverted && profile) return null;

    return children;
};

export default ProfileProtectedRoute;
