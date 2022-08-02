export const User = ({ firstName, lastName, userTag, position, id }: IUser) => {
  return (
    <div className="flex justify-start">
      <div className="w-[72px] h-[72px] overflow-hidden rounded-full">
        <img src={`https://i.pravatar.cc/72?u=${id}`} alt="Avatar" />
      </div>
      <div>
        <div>
          {firstName} {lastName} <span>{userTag}</span>
        </div>
        <div>{position}</div>
      </div>
    </div>
  );
};

interface IUser {
  firstName: string;
  lastName: string;
  userTag: string;
  position: string;
  id: string;
}
