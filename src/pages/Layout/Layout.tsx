

import Header from "../../components/Header/Header";
import PlayButton from "../PlayButton/PlayButton";
import ShowNumber from "../ShowNumber/ShowNumber";
import "./style.scss";

const Layout = () => {
    return (
        <div className="">
            <Header />
            <main className="flex items-center flex-col justify-center pt-10">
                <ShowNumber />
                <PlayButton />
            </main>
        </div>
    );
};

export default Layout;