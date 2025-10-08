import ProfileCreationTitle from "./ProfileCreationTitle";
import ProfileCreationForm from "./ProfileCreationForm";
import ResponsiveCard from "@/ui/atoms/ResponsiveCard";

import { Card } from "@/ui/atoms/Card";

const ProfileCreationCard = () => {
    return (
        <ResponsiveCard>
            <Card.Header>
                <Card.Title>
                    <ProfileCreationTitle />
                </Card.Title>
            </Card.Header>
            <Card.Content>
                <div className="flex flex-col gap-8">
                    <ProfileCreationForm />
                </div>
            </Card.Content>
        </ResponsiveCard>
    );
};

export default ProfileCreationCard;
