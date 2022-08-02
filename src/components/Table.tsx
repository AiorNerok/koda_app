import { useRecoilValue } from "recoil";
import { AtomArrayOnRender } from "recoil/atoms";
import { User } from "./ui/User";

export const Table = () => {
  const ListOnRender = useRecoilValue(AtomArrayOnRender);

  return (
    <ul>
      <li>1</li>
      {ListOnRender &&
        ListOnRender.map((i, index) => {
          return (
            <li key={index}>
              {/* @ts-ignore */}
              <User firstName={i.firstName} lastName={i.lastName} position={i.position} userTag={i.userTag} id={i.id} />
            </li>
          );
        })}
    </ul>
  );
};
