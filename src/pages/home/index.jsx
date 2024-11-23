import React from "react";
import Logo from "../../assets/Logo";
import Barcode from "../../assets/Barcode"
import trashImage from "../../assets/trash.png";

const Home = () => {
  return (
    <div className="bg-white min-h-screen px-4 py-6">
      <div className="flex justify-between items-center mb-5">
        <Logo width="114px" height="34px"/>
        <Barcode />
      </div>

      <div className="bg-gray-100 rounded-[12px] p-4 mb-6 flex flex-col items-center">
        <img src={trashImage} className="mb-2 w-[34px]" alt="쓰레기 이미지" />
        <p className="text-[14px] font-semibold text-gray-900 mb-1 text-center">오늘의 분리수거 퀴즈</p>
        <p className="text-[13px] text-[#6804FF] text-center">
          우유팩과 종이팩은 같은 재활용품으로 분류될까요?
        </p>
      </div>

      {/* Search Bar */}
      <div className="flex items-center bg-gray-100 rounded-lg p-2 mb-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-5 h-5 text-gray-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 15.75l-3.4-3.4m-1.15-1.15a6 6 0 100 12 6 6 0 000-12zm0 0a6 6 0 100 12 6 6 0 000-12z"
          />
        </svg>
        <input
          type="text"
          placeholder="상품명을 검색하세요"
          className="ml-2 flex-grow bg-transparent outline-none text-sm text-gray-600"
        />
      </div>

      {/* Recent Items */}
      <h2 className="text-lg font-semibold text-gray-900 mb-4">
        최근 조회한 분리수거
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {[...Array(6)].map((_, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 p-4 flex flex-col items-center"
          >
            <img
              src="/yukgaejang.png"
              alt="육개장 사발면"
              className="h-24 mb-3"
            />
            <p className="text-sm font-medium text-gray-800 mb-2">
              육개장 사발면
            </p>
            <div className="flex gap-2">
              <span className="bg-blue-100 text-blue-600 text-xs font-medium px-2 py-1 rounded">
                플라스틱
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded">
                알루미늄
              </span>
              <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 rounded">
                종이
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;