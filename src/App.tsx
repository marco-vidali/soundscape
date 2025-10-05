import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./features/auth/ProtectedRoute";
import { ThemeProvider } from "@/components/ThemeProvider";

const Signup = lazy(() => import("./pages/Signup"));
const Verification = lazy(() => import("./pages/Verification"));
const ProfileCreation = lazy(() => import("./pages/ProfileCreation"));
const Login = lazy(() => import("./pages/Login"));

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
                <BrowserRouter>
                    <Routes>
                        <Route path="auth">
                            <Route path="signup" element={<Signup />} />
                            <Route path="login" element={<Login />} />
                            <Route
                                path="verification"
                                element={
                                    <ProtectedRoute>
                                        <Verification />
                                    </ProtectedRoute>
                                }
                            />
                        </Route>

                        <Route path="profile">
                            <Route
                                path="create"
                                element={
                                    <ProtectedRoute>
                                        <ProfileCreation />
                                    </ProtectedRoute>
                                }
                            />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </ThemeProvider>
        </QueryClientProvider>
    );
}

export default App;
