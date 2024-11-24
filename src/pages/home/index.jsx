import React from "react";
import Logo from "../../assets/Logo";
import Barcode from "../../assets/Barcode";
import SearchBar from "../../components/SearchBar";
import Tag from "../../components/Tag";
import ItemData from "../../data/ItemsData";
import trashImage from "../../assets/trash.png";

const Home = () => {
  return (
    <div className="bg-white w-full px-5 py-6">
      <div className="flex justify-between items-center mb-5">
        <Logo width="114px" height="34px"/>
        <Barcode />
      </div>
      <div className="bg-gray-100 rounded-[12px] p-4 mb-[10px] flex flex-col items-center">
        <img src={trashImage} className="mb-2 w-[34px]" />
        <p className="text-[15px] font-semibold text-gray-900 mb-1 text-center">
          오늘의 분리수거 퀴즈
        </p>
        <p className="text-[14px] text-[#6804FF] text-center">
          우유팩과 종이팩은 같은 재활용품으로 분류될까요?
        </p>
      </div>
      <SearchBar />
      <h2 className="text-lg font-bold text-gray-900 mb-2.5">
        최근 조회한 분리수거
      </h2>
      <div className="grid grid-cols-2 gap-4">
        {ItemData.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-gray-200 p-2.5 flex flex-col items-center"
          >
            <img
              src={item.image}
              className="h-24 mb-3"
            />
            <p className="text-sm font-medium text-gray-800 mb-2">
              {item.name}
            </p>
            <div className="flex gap-1 flex-wrap justify-start">
              {item.tags.map((tag, index) => (
                <Tag key={index} label={tag} type={tag} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;