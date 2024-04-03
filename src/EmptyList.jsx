import React from "react";
import undrawNoData from "./assets/undrawNoData.png";

const EmptyList = () => {
  return (
    <li className="hidden flex-col items-center last:flex">
      <img
        src={undrawNoData}
        className="w-56 m-3 rounded-lg"
        alt="empty lists"
      />
      <p className="text-sm text-zinc-500">There Is No Lists</p>
    </li>
  );
};

export default EmptyList;
