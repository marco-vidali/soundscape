import { Link } from "react-router-dom";

const LoginLink = () => {
    return (
        <p>
            Don't have an account?{" "}
            <Link to={{ pathname: "/auth/login" }}>Log in</Link>!
        </p>
    );
};

export default LoginLink;
