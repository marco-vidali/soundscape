import LoginForm from "./LoginForm";
import SignupLink from "./SignupLink";
import LoginTitle from "./LoginTitle";
import { Card } from "@/ui/atoms/Card";

const LoginCard = () => {
    return (
        <Card className="p-8 bg-transparent border-0 shadow-none w-full md:bg-card md:border-2 md:shadow-md md:w-auto">
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
        </Card>
    );
};

export default LoginCard;
