import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProtectedRoute from "@/features/auth/components/ProtectedRoute";
import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { Toaster } from "@/ui/atoms/Sonner";

const Signup = lazy(() => import("../pages/Signup"));
const Verification = lazy(() => import("../pages/Verification"));
const ProfileCreation = lazy(() => import("../pages/ProfileCreation"));
const Login = lazy(() => import("../pages/Login"));

const queryClient = new QueryClient();

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Toaster position="top-center" />

            <QueryClientProvider client={queryClient}>
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
            </QueryClientProvider>
        </ThemeProvider>
    );
}

export default App;
