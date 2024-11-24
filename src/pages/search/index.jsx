import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ItemsData from "../../data/ItemsData";
import Tag from "../../components/Tag";
import SearchIcon from "../../assets/SearchIcon";
import Header from "../../components/Header";

const Search = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const filteredItems = ItemsData.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="bg-white min-h-screen px-4 py-6">
      <Header />
      <div className="flex items-center bg-gray-100 rounded-[12px] px-4 py-3 mb-6">
        <SearchIcon/>
        <input
          type="text"
          placeholder="검색어를 입력하세요"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-grow ml-2 bg-transparent outline-none text-[16px] text-gray-600"
        />
      </div>

      <div>
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-2 gap-4">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="rounded-lg border border-gray-200 p-4 flex flex-col items-start cursor-pointer"
                onClick={() => navigate(`/detail/${item.id}`)} // 클릭 시 Detail 페이지로 이동
              >
                <img
                  src={item.image}
                  className="w-full h-auto aspect-square mb-3"
                  alt={item.name}
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
        ) : (
          <p className="text-center text-gray-600">검색 결과가 없습니다.</p>
        )}
      </div>
    </div>
  );
};

export default Search;