import FullScreenLoader from "@/ui/molecules/FullScreenLoader";

import { useEffect, type PropsWithChildren } from "react";
import { useIsLoggedIn } from "../hooks/useIsLoggedIn";
import { useNavigate } from "react-router-dom";

interface AuthProtectedRouteProps extends PropsWithChildren {}

const AuthProtectedRoute = ({ children }: AuthProtectedRouteProps) => {
    const navigate = useNavigate();

    const { loggedIn, isLoading } = useIsLoggedIn();

    useEffect(() => {
        if (!isLoading && !loggedIn) {
            navigate("/auth/login");
        }
    }, [loggedIn, isLoading, navigate]);

    if (isLoading) return <FullScreenLoader />;
    if (!loggedIn) return null;

    return children;
};

export default AuthProtectedRoute;
