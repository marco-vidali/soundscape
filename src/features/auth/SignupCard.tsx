import SignupForm from "./SignupForm";
import LoginLink from "./LoginLink";
import { Card } from "@/components/retroui/Card";
import SignupTitle from "./SignupTitle";

const SignupCard = () => {
    return (
        <Card className="p-8 bg-transparent border-0 shadow-none w-full md:bg-card md:border-2 md:shadow-md md:w-auto">
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
        </Card>
    );
};

export default SignupCard;
