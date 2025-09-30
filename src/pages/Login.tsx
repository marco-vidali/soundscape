import LoginForm from "../features/auth/LoginForm";
import LoginTitle from "../features/auth/LoginTitle";
import SignupLink from "../features/auth/SignupLink";

const Login = () => {
    return (
        <>
            <LoginTitle />
            <LoginForm />
            <SignupLink />
        </>
    );
};

export default Login;
