import { Link } from "react-router-dom";

const SignupLink = () => {
    return (
        <p className="text-center">
            Don't have an account?{" "}
            <Link to={{ pathname: "/auth/signup" }}>Sign up</Link>!
        </p>
    );
};

export default SignupLink;
