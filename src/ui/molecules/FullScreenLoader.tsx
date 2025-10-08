import { Loader } from "../atoms/Loader";

const FullScreenLoader = () => {
    return (
        <div className="h-dvh flex justify-center items-center">
            <Loader />
        </div>
    );
};

export default FullScreenLoader;
