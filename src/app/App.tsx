import AuthProtectedRoute from "@/features/auth/components/AuthProtectedRoute";
import ProfileProtectedRoute from "@/features/profile/components/ProfileProtectedRoute";

import { ThemeProvider } from "@/app/providers/ThemeProvider";
import { Toaster } from "@/ui/atoms/Sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Signup = lazy(() => import("@/pages/Signup"));
const Verification = lazy(() => import("@/pages/Verification"));
const ProfileCreation = lazy(() => import("@/pages/ProfileCreation"));
const Login = lazy(() => import("@/pages/Login"));
const Home = lazy(() => import("@/pages/Home"));
const FavoriteColors = lazy(() => import("@/pages/FavoriteColors"));

const queryClient = new QueryClient();

function App() {
    return (
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <Toaster position="top-center" />

            <QueryClientProvider client={queryClient}>
                <BrowserRouter>
                    <Routes>
                        <Route
                            index
                            element={
                                <AuthProtectedRoute>
                                    <ProfileProtectedRoute>
                                        <Home />
                                    </ProfileProtectedRoute>
                                </AuthProtectedRoute>
                            }
                        />

                        <Route path="auth">
                            <Route path="signup" element={<Signup />} />
                            <Route path="login" element={<Login />} />
                            <Route
                                path="verification"
                                element={<Verification />}
                            />
                        </Route>

                        <Route path="profile">
                            <Route
                                path="create"
                                element={
                                    <AuthProtectedRoute>
                                        <ProfileProtectedRoute inverted>
                                            <ProfileCreation />
                                        </ProfileProtectedRoute>
                                    </AuthProtectedRoute>
                                }
                            />
                        </Route>

                        <Route path="colors">
                            <Route
                                path="favorite"
                                element={<FavoriteColors />}
                            />
                        </Route>
                    </Routes>
                </BrowserRouter>
            </QueryClientProvider>
        </ThemeProvider>
    );
}

export default App;
