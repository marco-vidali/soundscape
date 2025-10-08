import { Card } from "@/ui/atoms/Card";
import ProfileCreationTitle from "./ProfileCreationTitle";
import ProfileCreationForm from "./ProfileCreationForm";

const ProfileCreationCard = () => {
    return (
        <Card className="p-8 bg-transparent border-0 shadow-none w-full md:bg-card md:border-2 md:shadow-md md:w-auto">
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
        </Card>
    );
};

export default ProfileCreationCard;
