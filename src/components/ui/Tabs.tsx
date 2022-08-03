import { useRecoilValue, useRecoilState } from "recoil";
import { AtomUniqueData, AtomFilterKey } from "recoil/atoms";

export const Tabs = () => {
  const list = useRecoilValue(AtomUniqueData);
  const [, SetKey] = useRecoilState(AtomFilterKey);

  let l = list.map((i) => {
    // @ts-ignore
    let val =
      // @ts-ignore
      i.length <= 3
        ? // @ts-ignore
          i.toUpperCase()
        : String(i[0]).toUpperCase() + String(i).slice(1);
    val = val.replace("_", "-");

    return {
      value: val,
      origin: i,
    };
  });

  l = [
    {
      value: "Все",
      // @ts-ignore
      origin: "",
    },
    ...l,
  ];

  const handlerClick = (e: MouseEvent) => {
    let target = e.target 
    // @ts-ignore
    let {x, width} = target.getBoundingClientRect()
    // @ts-ignore
        SetKey(target.getAttribute("data-origin"));
  };

  return (
    <>
      <ul className="flex">
        {list &&
          l.map((i, index) => {
            return (
              <li
                data-origin={i.origin}
                key={index}
                className="px-3 py-2 cursor-pointer"
                // @ts-ignore
                onClick={(e: MouseEvent) => handlerClick(e)}
              >
                {i.value}
              </li>
            );
          })}
      </ul>
      <div style={{

      }} className='h-[1px] w-4 bg-[#6534FF]'/>
    </>
  );
};
