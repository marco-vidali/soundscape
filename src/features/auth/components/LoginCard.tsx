import LoginForm from "./LoginForm";
import SignupLink from "./SignupLink";
import ResponsiveCard from "@/ui/atoms/ResponsiveCard";
import LoginTitle from "./LoginTitle";

import { Card } from "@/ui/atoms/Card";

const LoginCard = () => {
    return (
        <ResponsiveCard>
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
        </ResponsiveCard>
    );
};

export default LoginCard;
