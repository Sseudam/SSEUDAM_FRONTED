import React from "react";
import { useNavigate } from "react-router-dom";
import SearchIcon from "../assets/SearchIcon";

const SearchBar = () => {
  const navigate = useNavigate();

  const handleFocus = () => {
    navigate("/home/search");
  };

  return (
    <div
      className="flex items-center bg-white border border-[#E6E6E6] rounded-[12px] px-4 py-3 mb-2.5"
      onClick={handleFocus}
    >
      <SearchIcon />
      <input
        type="text"
        placeholder="상품명을 검색하세요"
        className="ml-2 flex-grow bg-transparent outline-none text-[16px] text-gray-600 cursor-pointer"
        readOnly
      />
    </div>
  );
};

export default SearchBar;