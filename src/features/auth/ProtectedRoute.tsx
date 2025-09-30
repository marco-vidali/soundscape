import { useEffect, type PropsWithChildren } from "react";
import { useIsLoggedIn } from "./useIsLoggedIn";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps extends PropsWithChildren {}

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
    const { loggedIn, isLoading } = useIsLoggedIn();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isLoading && !loggedIn) {
            navigate("/auth/login");
        }
    }, [loggedIn, isLoading, navigate]);

    if (isLoading) return <div>Loading...</div>;
    if (!loggedIn) return null;

    return children;
};

export default ProtectedRoute;
