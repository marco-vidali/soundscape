import ProfileCreationCard from "@/features/profile/components/ProfileCreationCard";
import FullScreenCenter from "@/ui/atoms/FullScreenCenter";
import FullScreenLoader from "@/ui/molecules/FullScreenLoader";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCurrentUser } from "@/features/auth/hooks/useGetCurrentUser";
import { useGetProfile } from "@/features/profile/hooks/useGetProfile";

const ProfileCreation = () => {
    const navigate = useNavigate();

    const { currentUser, isLoading: isUserLoading } = useGetCurrentUser();

    const userId = currentUser?.user.id ?? "";
    const { profile, isLoading: isProfileLoading } = useGetProfile(userId);

    useEffect(() => {
        if (!isUserLoading && !isProfileLoading && !!profile) {
            navigate("/");
        }
    }, [profile, isUserLoading, isProfileLoading, navigate]);

    if (isUserLoading || isProfileLoading) return <FullScreenLoader />;
    if (profile) return null;

    return (
        <FullScreenCenter>
            <ProfileCreationCard />
        </FullScreenCenter>
    );
};

export default ProfileCreation;
