import React from "react";
import { useNavigate } from "react-router-dom";
import trashImage from "../../assets/trash.png";
import O from "../../assets/O";
import X from "../../assets/X";
import Header from "../../components/Header";

const Test = () => {
    const navigate = useNavigate();

    return (
        <div className="bg-white min-h-screen px-4 py-6 flex flex-col items-start">
            <Header />
            <div className="items-start my-8 text-left">
                <img src={trashImage} className="w-[64px]" />
                <p className="text-[22px] w-[310px] font-bold text-gray-900">
                    우유팩과 종이팩은 같은 재활용품으로 분류될까요?
                </p>
            </div>
            <div className="flex gap-4 w-full mt-10">
                <button
                    className="bg-blue-100 rounded-lg flex-1 aspect-square flex items-center justify-center"
                    onClick={() => navigate("/success")}
                >
                    <O />
                </button>

                <button
                    className="bg-red-100 rounded-lg flex-1 aspect-square flex items-center justify-center"
                    onClick={() => navigate("/fail")}
                >
                    <X />
                </button>
            </div>
        </div>
    );
};

export default Test;
