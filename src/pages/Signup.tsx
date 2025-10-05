import LoginLink from "../features/auth/LoginLink";
import SignupForm from "../features/auth/SignupForm";
import SignupTitle from "../features/auth/SignupTitle";

const Signup = () => {
    return (
        <div className="flex flex-col justify-center gap-8 p-8 h-screen">
            <SignupTitle />
            <SignupForm />
            <LoginLink />
        </div>
    );
};

export default Signup;
