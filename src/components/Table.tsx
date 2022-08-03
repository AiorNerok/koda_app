import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import {
  AtomArrayOnRender,
  AtomFilterKey,
  AtomSearchValue,
} from "recoil/atoms";
import { Spacer } from "./Spacer";
import { User } from "./ui/User";

export const Table = () => {
  const ListOnRender = useRecoilValue(AtomArrayOnRender);
  const FilterKey = useRecoilValue(AtomFilterKey);
  const SearchValue = useRecoilValue(AtomSearchValue);

  const [lr, setlr] = useState([]);

  useEffect(() => {
    let l = ListOnRender.filter((i) => {
      if (!FilterKey) return i;
      return i["department"] === FilterKey;
    });

    l = l.filter((i) => {
      return (
        String(i["firstName"])
          .toLowerCase()
          .startsWith(SearchValue.toLowerCase()) ||
        String(i["lastName"])
          .toLowerCase()
          .startsWith(SearchValue.toLowerCase()) ||
        String(i["position"])
          .toLowerCase()
          .startsWith(SearchValue.toLowerCase()) ||
          String(i["department"])
          .toLowerCase()
          .startsWith(SearchValue.toLowerCase()) ||
        String(i["userTag"]).toLowerCase().startsWith(SearchValue.toLowerCase())
      );
    });

    setlr(l);
  }, [FilterKey, ListOnRender, SearchValue]);

  return (
    <div className="max-w-7xl mx-auto">
      <Spacer y={15} />
      <ul className="px-4">
        {lr &&
          lr.map((i, index) => {
            return (
              <li key={index} className="mb-[0.65rem]">
                {/* @ts-ignore */}
                <User firstName={i.firstName} lastName={i.lastName} position={i.position} userTag={i.userTag} id={i.id} />
              </li>
            );
          })}
      </ul>
    </div>
  );
};
