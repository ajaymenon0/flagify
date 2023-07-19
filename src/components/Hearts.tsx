import cn from "classnames";
import { HeartIcon } from "./icons/HeartIcon";

export const Hearts = ({
  score,
  className = "",
}: {
  score: 0 | 1 | 2 | 3;
  className?: string;
}) => {
  return (
    <div className={`flex w-40 justify-between text-center ${className}`}>
      <HeartIcon
        className={cn(" transition-all delay-75", {
          " animate-heartbeat": score === 1,
          "opacity-50 grayscale": score === 0,
        })}
      />
      <HeartIcon
        className={cn(" transition-all delay-75", {
          "opacity-50 grayscale": score < 2,
        })}
      />
      <HeartIcon
        className={cn(" transition-all delay-75", {
          "opacity-50 grayscale": score < 3,
        })}
      />
    </div>
  );
};
