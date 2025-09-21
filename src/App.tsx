import { lazy } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const Signup = lazy(() => import("./pages/Signup"));

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
