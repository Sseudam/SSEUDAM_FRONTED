import React from "react";

const Tag = ({ label, type }) => {
  const tagStyles = {
    플라스틱: "bg-blue-100 text-blue-600",
    알루미늄: "bg-gray-100 text-gray-600",
    종이: "bg-red-100 text-red-600",
    유리: "bg-green-100 text-green-600",
    일반쓰레기: "bg-gray-400 text-white",
  };

  return (
    <span
      className={`px-2 py-1 rounded text-xs font-medium ${tagStyles[type]}`}
    >
      {label}
    </span>
  );
};

export default Tag;