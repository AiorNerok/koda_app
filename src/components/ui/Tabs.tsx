import { useRecoilValue } from "recoil";
import { AtomUniqueData } from "recoil/atoms";

export const Tabs = () => {
  const list = useRecoilValue(AtomUniqueData);
  return (
    <ul>
      {list &&
        list.map((i, index) => {
          return <li key={index}>{i}</li>;
        })}
    </ul>
  );
};
