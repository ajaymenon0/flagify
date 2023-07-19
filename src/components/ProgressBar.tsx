import { StrokeText } from "./StrokeText";

export const ProgressBar = ({
  total,
  score,
}: {
  total: number;
  score: number;
}) => {
  return (
    <div className=" w-full h-10 border-quaternary border-2 rounded-lg relative flex justify-end items-center">
      <StrokeText
        text={`${score}/${total}`}
        textSizeClass="sm"
        stroke="4px"
        className="mr-3"
        textClass="text-quaternary"
      />
      <div
        style={{ width: `${(score / total) * 100}%` }}
        className=" absolute bg-quaternary h-10 left-0 transition-all rounded-lg delay-75 duration-1000"
      />
    </div>
  );
};
