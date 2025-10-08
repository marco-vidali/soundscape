import type { PropsWithChildren } from "react";

interface FullScreenCenterProps extends PropsWithChildren {}

const FullScreenCenter = ({ children }: FullScreenCenterProps) => {
    return (
        <div className="h-dvh flex justify-center items-center">{children}</div>
    );
};

export default FullScreenCenter;
