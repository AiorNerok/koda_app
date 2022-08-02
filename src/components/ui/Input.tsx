import React from "react";

import SearchIcon from "../../assets/searchicon.png";
import FilterIcon from "../../assets/list-ui-alt.png";

export const Input = () => (
  <div className="inline-flex relative w-full">
    <img src={SearchIcon} alt="" className="absolute top-2 left-[14px]" />
    {/* @ts-ignore */}
    <input
      type="text"
      className="h-10 rounded-2xl bg-[#F7F7F8] outline-none pl-11 w-full"
      placeholder="Введи имя, тег, почту..."
    />
    <img src={FilterIcon} alt="" className="absolute  top-2 right-[14px]" />
  </div>
);
