import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProfileCreationTitle from "../features/profile/ProfileCreationTitle";
import ProfileCreationForm from "../features/profile/ProfileCreationForm";
import { useGetCurrentUser } from "../features/auth/useGetCurrentUser";
import { useGetProfile } from "../features/profile/useGetProfile";

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

    if (isUserLoading || isProfileLoading) return <div>Loading...</div>;

    return (
        <>
            <ProfileCreationTitle />
            <ProfileCreationForm />
        </>
    );
};

export default ProfileCreation;
