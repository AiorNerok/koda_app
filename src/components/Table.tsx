import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { AtomArrayOnRender, AtomFilterKey } from "recoil/atoms";
import { User } from "./ui/User";

export const Table = () => {
  const ListOnRender = useRecoilValue(AtomArrayOnRender);
  const FilterKey = useRecoilValue(AtomFilterKey);

  const [lr, setlr] = useState([]);

  useEffect(() => {
    let l = ListOnRender.filter((i) => {
      if (!FilterKey) return i
      return i["department"] === FilterKey;
    });
    setlr(l);
  }, [FilterKey, ListOnRender]);

  return (
    <ul>
      {lr &&
        lr.map((i, index) => {
          return (
            <li key={index}>
              {/* @ts-ignore */}
              <User firstName={i.firstName} lastName={i.lastName} position={i.position} userTag={i.userTag} id={i.id}
              />
            </li>
          );
        })}
    </ul>
  );
};
