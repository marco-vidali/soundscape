import LoginLink from "../features/auth/LoginLink";
import SignupForm from "../features/auth/SignupForm";
import SignupTitle from "../features/auth/SignupTitle";

const Signup = () => {
    return (
        <>
            <SignupTitle />
            <SignupForm />
            <LoginLink />
        </>
    );
};

export default Signup;
