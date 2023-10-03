

import coffee from "../../assets/icons/coffee.svg";

const ShowNumber = () => {
    return (
        <section>
            <div>
                <div className="flex items-center justify-center gap-x-[5px] border rounded-full w-[195px] h-[48px] mb-[32px] mx-auto">
                    <img src={coffee} alt="coffee" /> <span className="text-[#14401D] font-medium text-[24px] font-['RobotoFlex']">Short Break</span>
                </div>
                <div className="mb-[32px] flex flex-col items-center justify-center text-[256px] leading-[217.6px] font-bold font-['RobotoFlex'] text-[#14401D]">
                    <span>04</span>
                    <span>59</span>
                </div>
            </div>
        </section>
    );
};

export default ShowNumber;