import LoginForm from "./LoginForm";
import SignupLink from "./SignupLink";
import FullScreenCard from "@/ui/molecules/FullScreenCard";
import LoginTitle from "./LoginTitle";

import { Card } from "@/ui/atoms/Card";

const LoginCard = () => {
    return (
        <FullScreenCard>
            <Card.Header>
                <Card.Title>
                    <LoginTitle />
                </Card.Title>
            </Card.Header>
            <Card.Content>
                <div className="flex flex-col gap-8">
                    <LoginForm />
                    <SignupLink />
                </div>
            </Card.Content>
        </FullScreenCard>
    );
};

export default LoginCard;
