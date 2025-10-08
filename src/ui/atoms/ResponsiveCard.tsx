import type { PropsWithChildren } from "react";

interface ResponsiveCardProps extends PropsWithChildren {}

const ResponsiveCard = ({ children }: ResponsiveCardProps) => {
    return (
        <div className="p-8 bg-transparent border-0 shadow-none w-full md:bg-card md:border-2 md:shadow-md md:w-auto">
            {children}
        </div>
    );
};

export default ResponsiveCard;
