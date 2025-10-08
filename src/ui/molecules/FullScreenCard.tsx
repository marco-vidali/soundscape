import { Outlet } from "react-router-dom";

const FullScreenCard = () => {
    return (
        <div className="p-8 bg-transparent border-0 shadow-none w-full md:bg-card md:border-2 md:shadow-md md:w-auto">
            <Outlet />
        </div>
    );
};

export default FullScreenCard;
