import { useRecoilValue } from "recoil";
import { AtomUniqueData } from "recoil/atoms/AtomUniqueData";
import { Input } from "./ui/Input";
import { Tabs } from "./ui/Tabs";

export const Header = () => {
  let unique = useRecoilValue(AtomUniqueData);

  console.log(unique);

  return (
    <header>
      <h2>Поиск</h2>
      <Input />
      <Tabs />
    </header>
  );
};
