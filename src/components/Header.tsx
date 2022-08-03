import { Spacer } from "./Spacer";
import { Input } from "./ui/Input";
import { Tabs } from "./ui/Tabs";

export const Header = () => {
  return (
    <header className="max-w-7xl mx-auto px-4">
      <Spacer y={15}/>
      <h2 className="text-2xl leading-7 font-bold pl-2">Поиск</h2>
      <Spacer y={18}/>
      <Input />
      <Spacer y={12}/>
      <Tabs />
    </header>
  );
};
