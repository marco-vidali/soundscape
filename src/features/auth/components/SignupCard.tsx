import SignupForm from "./SignupForm";
import LoginLink from "./LoginLink";
import ResponsiveCard from "@/ui/atoms/ResponsiveCard";
import SignupTitle from "./SignupTitle";

import { Card } from "@/ui/atoms/Card";

const SignupCard = () => {
    return (
        <ResponsiveCard>
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
        </ResponsiveCard>
    );
};

export default SignupCard;
