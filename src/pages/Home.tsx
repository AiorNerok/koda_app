import { useRecoilValue } from "recoil";

import { Header } from "components/Header";
import { AtomArrayOnRender } from "recoil/atoms";

export const Home = (text: any) => {
  const ListUser = useRecoilValue(AtomArrayOnRender);
  return (
    <div>
      home page
      <br />
      <Header />
      <div>
        {ListUser &&
          ListUser.map((i, index) => {
            console.log(i);
            return <div>{index}</div>;
          })}
      </div>
    </div>
  );
};
