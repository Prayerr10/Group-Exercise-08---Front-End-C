import React from "react";

const CardInfo = ({ title, description }) => {
  return (
    <div className="border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition">
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default CardInfo;
