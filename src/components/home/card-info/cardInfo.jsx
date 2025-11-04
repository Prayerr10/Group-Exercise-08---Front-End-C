import React from "react";
import Evolution from "./Evolution/Evolution";
import Logo from "./Logo/Logo";
import TypeEffect from "./Type-Effect/TypeEffect";

const CardInfo = ({ title, description }) => {
  return (
    <div className="border rounded-xl shadow-md p-4 bg-white hover:shadow-lg transition">
      <Logo />
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
      <Evolution />
      <TypeEffect />
    </div>
  );
};

export default CardInfo;