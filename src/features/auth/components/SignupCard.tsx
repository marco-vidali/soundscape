import SignupForm from "./SignupForm";
import LoginLink from "./LoginLink";
import FullScreenCard from "@/ui/molecules/FullScreenCard";
import SignupTitle from "./SignupTitle";

import { Card } from "@/ui/atoms/Card";

const SignupCard = () => {
    return (
        <FullScreenCard>
            <Card.Header>
                <Card.Title>
                    <SignupTitle />
                </Card.Title>
            </Card.Header>
            <Card.Content>
                <div className="flex flex-col gap-8">
                    <SignupForm />
                    <LoginLink />
                </div>
            </Card.Content>
        </FullScreenCard>
    );
};

export default SignupCard;
