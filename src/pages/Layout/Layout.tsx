


import PlayButton from "../PlayButton/PlayButton";
import ShowNumber from "../ShowNumber/ShowNumber";


const Layout = () => {
    return (
        <div className="flex items-center flex-col justify-center w-screen h-screen bg-[#F2FFF5]">
            <ShowNumber/>
            <PlayButton/>
        </div>
    );
};

export default Layout;