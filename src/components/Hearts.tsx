import { HeartIcon } from "./icons/HeartIcon";

export const Hearts = ({
  score,
  className = "",
}: {
  score: 1 | 2 | 3;
  className?: string;
}) => {
  return (
    <div className={`flex w-40 justify-between text-center ${className}`}>
      <HeartIcon />
      <HeartIcon />
      <HeartIcon />
    </div>
  );
};
