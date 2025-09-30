import { Link } from "react-router-dom";

const SignupLink = () => {
    return (
        <p>
            Already have an account?{" "}
            <Link to={{ pathname: "/auth/signup" }}>Sign up</Link>!
        </p>
    );
};

export default SignupLink;
