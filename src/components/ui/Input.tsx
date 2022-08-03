import SearchIcon from "../../assets/searchicon.png";
import FilterIcon from "../../assets/list-ui-alt.png";
import { useRef } from "react";
import { AtomSearchValue } from "recoil/atoms";
import { useRecoilState } from "recoil";

export const Input = () => {
  const refInput = useRef<HTMLInputElement>(null);
  const [, setAtomSearchValue] = useRecoilState(AtomSearchValue);
  
  const KeyDownHandler = () => {
    if (refInput.current !== null) {
      setAtomSearchValue(refInput.current.value);
    }
  };

  return (
    <div className="inline-flex relative w-full">
      <img src={SearchIcon} alt="" className="absolute top-[0.6rem] left-[13px]" />
      {/* @ts-ignore */}
      <input
        ref={refInput}
        onChange={KeyDownHandler}
        type="text"
        className="h-10 rounded-2xl bg-[#F7F7F8] outline-none pl-11 w-full"
        placeholder="Введи имя, тег, почту..."
      />
      <img src={FilterIcon} alt="" className="absolute  top-2 right-[12px]" />
    </div>
  );
};
