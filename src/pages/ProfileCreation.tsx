import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useGetCurrentUser } from "@/features/auth/hooks/useGetCurrentUser";
import { useGetProfile } from "@/features/profile/hooks/useGetProfile";
import ProfileCreationCard from "@/features/profile/components/ProfileCreationCard";
import { Loader } from "@/ui/atoms/Loader";

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

    if (isUserLoading || isProfileLoading)
        return (
            <div className="h-dvh flex justify-center items-center">
                <Loader />
            </div>
        );

    return (
        <div className="flex justify-center items-center h-dvh">
            <ProfileCreationCard />
        </div>
    );
};

export default ProfileCreation;
