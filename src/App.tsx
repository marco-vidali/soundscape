import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Signup = lazy(() => import("./pages/Signup"));
const Verification = lazy(() => import("./pages/Verification"));
const ProfileCreation = lazy(() => import("./pages/ProfileCreation"));

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="auth">
                        <Route path="signup" element={<Signup />} />
                        <Route path="verification" element={<Verification />} />
                    </Route>

                    <Route path="profile">
                        <Route path="create" element={<ProfileCreation />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
