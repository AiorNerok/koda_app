export const User = ({ firstName, lastName, userTag, position, id }: IUser) => {
  return (
    <div className="flex justify-start items-center">
      <div className="w-[72px] h-[72px] overflow-hidden rounded-full">
        <img src={`https://i.pravatar.cc/72?u=${id}`} alt="Avatar" />
      </div>
      <div className="ml-4">
        <div className="text-base leading-5 font-medium">
          {firstName} {lastName} <span className="text-[#97979B] text-[14px] leading-[18px]" >{userTag.toLowerCase()}</span>
        </div>
        <div className="text-[#55555C] text-[14px] leading-4">{position}</div>
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
