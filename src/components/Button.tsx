import { LevelStatus } from "../types";
import { LockedIcon } from "./icons/LockedIcon";
import { StarIcon } from "./icons/StarIcon";

export const Button = ({ text }: { text: string }) => {
  return (
    <button className=" bg-white font-jua text-quaternary px-4 rounded py-4 z-10 w-200 text-lg shadow-red active:shadow-redDown">
      {text}
    </button>
  );
};

export const LevelButton = ({
  text,
  status,
  className = "",
}: {
  text: string;
  status?: LevelStatus;
  className?: string;
}) => {
  const statusIconSelector = (status: string) => {
    switch (status) {
      case "completed":
        return <StarIcon />;
      case "unlocked":
        return undefined;
      case "locked":
        return <LockedIcon />;
      default:
        return undefined;
    }
  };

  return (
    <button
      className={`flex items-center justify-center bg-white font-jua px-9 rounded py-2 z-10 w-250 text-lg text-primary shadow-primary active:shadow-primaryDown disabled:text-disabled disabled:shadow-disabled ${className}`}
      disabled={status === "locked"}
    >
      <span className={` mt-1 ${statusIconSelector(status || "") && "mr-4"}`}>
        {text}
      </span>
      {statusIconSelector(status || "unlocked")}
    </button>
  );
};
