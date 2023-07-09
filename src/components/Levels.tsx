import { LevelItem } from "../types";
import { LevelButton } from "./Button";
import { StrokeText } from "./StrokeText";

export const Levels = () => {
  const data: LevelItem[] = [
    {
      level: 1,
      status: "completed",
    },
    {
      level: 2,
      status: "unlocked",
    },
    {
      level: 3,
      status: "locked",
    },
    {
      level: 4,
      status: "locked",
    },
    {
      level: 5,
      status: "locked",
    },
    {
      level: 6,
      status: "locked",
    },
    {
      level: 7,
      status: "locked",
    },
  ];

  return (
    <div className="flex flex-col justify-content-center text-center py-8">
      <StrokeText
        text="FLAGIFY"
        className="m-auto mb-16"
        stroke="8px"
        textSizeClass="text-3xl"
      />
      <div className=" z-10 flex flex-col justify-center items-center">
        {data.map((item) => (
          <LevelButton
            text={`Level ${item.level}`}
            status={item.status}
            className="mb-16"
          />
        ))}
      </div>
    </div>
  );
};
