import type { PropsWithChildren } from "react";

interface FullScreenCardProps extends PropsWithChildren {}

const FullScreenCard = ({ children }: FullScreenCardProps) => {
    return (
        <div className="p-8 bg-transparent border-0 shadow-none w-full md:bg-card md:border-2 md:shadow-md md:w-auto">
            {children}
        </div>
    );
};

export default FullScreenCard;
