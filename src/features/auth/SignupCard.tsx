import SignupTitle from "./SignupTitle";
import SignupForm from "./SignupForm";
import LoginLink from "./LoginLink";
import { Card } from "@/components/retroui/Card";

const SignupCard = () => {
    return (
        <Card className="bg-transparent border-0 shadow-none w-full md:bg-card md:border-2 md:shadow-md md:w-auto">
            <Card.Content>
                <div className="flex flex-col justify-center gap-8 p-8">
                    <SignupTitle />
                    <SignupForm />
                    <LoginLink />
                </div>
            </Card.Content>
        </Card>
    );
};

export default SignupCard;
