import { Link } from "react-router-dom";

const LoginLink = () => {
    return (
        <p>
            Already have an account?{" "}
            <Link
                to={{ pathname: "/auth/login" }}
                className="font-head hover:underline"
            >
                Log in!
            </Link>
        </p>
    );
};

export default LoginLink;
