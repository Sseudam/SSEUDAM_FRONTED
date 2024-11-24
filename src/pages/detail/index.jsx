import React from "react";
import { useParams } from "react-router-dom";
import ItemsData from "../../data/ItemsData";
import Header from "../../components/Header";
import Tag from "../../components/Tag";

const Detail = () => {
  const { id } = useParams();
  const item = ItemsData.find((data) => data.id === parseInt(id));

  if (!item) {
    return (
      <div className="text-center text-gray-600 text-lg mt-10">
        해당 아이템을 찾을 수 없습니다.
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen px-4 py-6">
      <Header />
      <div className="mt-4">
        <div className="flex justify-center mb-6">
          <img
            src={item.image}
            alt={item.name}
            className="w-[200px] h-[200px] object-cover"
          />
        </div>

        <div className="flex justify-center gap-2 mb-4">
          {item.tags.map((tag, index) => (
            <Tag key={index} label={tag} type={tag} />
          ))}
        </div>

        <h2 className="text-xl font-bold text-gray-900 text-center mb-2">
          {item.name}
        </h2>
        <hr/>

        <div className="space-y-4 mt-4">
          {item.tags.map((tag, index) => (
            <div key={index}>
              <p className="text-[16px] font-bold text-gray-800 mb-1">{tag}</p>
              <p className="text-[14px] text-gray-600">
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