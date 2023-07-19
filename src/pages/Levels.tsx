import { Link } from "react-router-dom";
import { LevelItem } from "../types";
import { LevelButton } from "../components/Button";
import { StrokeText } from "../components/StrokeText";
import localforage from "localforage";
import { useEffect, useState } from "react";
import { leveldata } from "../data/levels";
import Confetti from "react-confetti";
// import { deleteLevelData } from "../utils";

export const Levels = () => {
  const [data, setData] = useState<LevelItem[]>([]);

  const getData = async () => {
    const data = await localforage.getItem<LevelItem[]>("levels");
    if (data) {
      setData(data);
    } else {
      setData(leveldata);
      await localforage.setItem("levels", leveldata);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col justify-content-center text-center py-8">
      {data[data.length - 1]?.status === "completed" && <Confetti />}
      <Link to="/" className="z-20 m-auto">
        <StrokeText
          text="FLAGIFY"
          className="mb-12"
          stroke="8px"
          textSizeClass="text-3xl"
        />
      </Link>
      <div className=" z-10 flex flex-col justify-center items-center">
        {data.length &&
          data.map((item, index) => (
            <Link key={index} to={`/quiz/${item.level}`}>
              <LevelButton
                text={`Level ${item.level}`}
                status={item.status}
                className="mb-12"
              />
            </Link>
          ))}

        <img
          src="./rexie.png"
          alt="rexie"
          className="fixed bottom-0 right-0 translate-x-5 w-24"
        />
      </div>
    </div>
  );
};
