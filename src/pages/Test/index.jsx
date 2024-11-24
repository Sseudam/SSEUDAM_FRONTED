import React from "react";
import trashImage from '../../assets/trash.png'
import O from '../../assets/O';
import X from '../../assets/X';

const Test = () => {
  return (
    <div className="bg-white min-h-screen px-4 py-6 flex flex-col items-start">
      {/* Header */}
      <div className="flex justify-between items-center w-full mb-6">
        <button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-gray-800"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>
      </div>

      <div className="items-start my-8 text-left">
        <img src={trashImage} className="w-[64px]" />
        <p className="text-[22px] w-[310px] font-bold text-gray-900">
          우유팩과 종이팩은 같은 재활용품으로 분류될까요?
        </p>
      </div>

      <div className="flex gap-4 w-full mt-10">
        <button className="bg-blue-100 rounded-lg flex-1 aspect-square flex items-center justify-center">
          <O />
        </button>

        <button className="bg-red-100 rounded-lg flex-1 aspect-square flex items-center justify-center">
          <X />
        </button>
      </div>
    </div>
  );
};

export default Test;