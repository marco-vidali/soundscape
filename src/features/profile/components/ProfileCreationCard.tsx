import ProfileCreationTitle from "./ProfileCreationTitle";
import ProfileCreationForm from "./ProfileCreationForm";
import FullScreenCard from "@/ui/molecules/FullScreenCard";

import { Card } from "@/ui/atoms/Card";

const ProfileCreationCard = () => {
    return (
        <FullScreenCard>
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
        </FullScreenCard>
    );
};

export default ProfileCreationCard;
