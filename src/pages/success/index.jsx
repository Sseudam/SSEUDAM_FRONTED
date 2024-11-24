import React from "react";
import sad from "../../assets/sad.png";
import Header from "../../components/Header";

const Success = () => {
    const handleRedirect = () => {
        window.location.href = "/home";
    };
    return (
        <div className="bg-white min-h-screen flex flex-col justify-between items-center px-4 py-6">
            <Header />
            <div className="flex flex-col items-center">
                <p className="text-[22px] font-bold text-gray-900 mb-2">
                    오답이에요.
                </p>
                <p className="text-[16px] text-gray-500 text-center w-[260px] mb-6">
                    우유팩은 특수 코팅이 되어 있어 종이와 별도로 배출해야
                    합니다.
                </p>
                <img src={sad} className="w-40 h-40 mb-10" />
            </div>

            <button
                onClick={handleRedirect}
                className="mb-8 bg-[#6804FF] text-white text-base font-semibod py-3 px-6 rounded-lg w-full"
            >
                확인
            </button>
        </div>
    );
};

export default Success;
