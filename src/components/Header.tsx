import { useRecoilValue } from "recoil";
import { AtomUniqueData } from "recoil/atoms/AtomUniqueData";

export const Header = () => {
  let unique = useRecoilValue(AtomUniqueData);

  console.log(unique);

  return (
    <header>
    
    </header>
  );
};
