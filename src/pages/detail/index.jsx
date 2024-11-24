import React from "react";
import { useParams } from "react-router-dom";
import ItemsData from "../../data/ItemsData";
import Header from "../../components/Header";

const Detail = () => {
  const { id } = useParams(); // URL에서 id 가져오기
  const item = ItemsData.find((data) => data.id === parseInt(id)); // id로 데이터 필터링

  if (!item) {
    return (
      <div className="text-center text-gray-600 text-lg mt-10">
        해당 아이템을 찾을 수 없습니다.
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen px-4 py-6">
      {/* Header */}
      <Header />

      {/* Content */}
      <div className="mt-4">
        {/* 이미지 */}
        <div className="flex justify-center mb-6">
          <img
            src={item.image}
            alt={item.name}
            className="w-[200px] h-[200px] object-cover"
          />
        </div>

        {/* 태그 */}
        <div className="flex justify-center gap-2 mb-4">
          {item.tags.map((tag, index) => (
            <span
              key={index}
              className={`text-xs font-medium px-2 py-1 rounded ${
                tag === "플라스틱"
                  ? "bg-blue-100 text-blue-600"
                  : tag === "알루미늄"
                  ? "bg-gray-100 text-gray-600"
                  : tag === "종이"
                  ? "bg-red-100 text-red-600"
                  : tag === "일반쓰레기"
                  ? "bg-gray-800 text-white"
                  : "bg-green-100 text-green-600"
              }`}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* 이름 */}
        <h2 className="text-xl font-bold text-gray-900 text-center mb-6">
          {item.name}
        </h2>

        {/* 분리배출 방법 */}
        <div className="space-y-4">
          {item.tags.map((tag, index) => (
            <div key={index}>
              <p className="text-sm font-bold text-gray-800 mb-1">{tag}</p>
              <p className="text-sm text-gray-600">
                내용물을 비운 후 깨끗하게 헹군 뒤 {tag}으로 배출하세요
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Detail;