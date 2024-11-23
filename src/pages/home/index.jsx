import React from "react";
import Logo from "../../assets/Logo";
import Barcode from "../../assets/Barcode"
import SearchBAr from '../../components/SearchBar'
import trashImage from "../../assets/trash.png";


const Home = () => {
  return (
    <div className="bg-white min-h-screen px-4 py-6">
      <div className="flex justify-between items-center mb-5">
        <Logo width="114px" height="34px"/>
        <Barcode />
      </div>

      <div className="bg-gray-100 rounded-[12px] p-4 mb-[10px] flex flex-col items-center">
        <img src={trashImage} className="mb-2 w-[34px]" />
        <p className="text-[15px] font-semibold text-gray-900 mb-1 text-center">오늘의 분리수거 퀴즈</p>
        <p className="text-[14px] text-[#6804FF] text-center">
          우유팩과 종이팩은 같은 재활용품으로 분류될까요?
        </p>
      </div>

      <SearchBar/>

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