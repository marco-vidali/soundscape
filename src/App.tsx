import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Signup = lazy(() => import("./pages/Signup"));

const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <Routes>
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    );
}

export default App;
