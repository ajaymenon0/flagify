import { Link } from "react-router-dom";
import { LevelItem } from "../types";
import { LevelButton } from "../components/Button";
import { StrokeText } from "../components/StrokeText";
import localforage from "localforage";
import { Fragment, useEffect, useState } from "react";
import { leveldata } from "../data/levels";
import Confetti from "react-confetti";
import classNames from "classnames";
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
            <Fragment key={index}>
              <Link to={`/quiz/${item.level}`}>
                <LevelButton
                  text={`Level ${item.level}`}
                  status={item.status}
                />
              </Link>
              {index < data.length - 1 && (
                <svg
                  height="50"
                  width="50"
                  className={classNames(" m-auto", {
                    "text-primary": item.status !== "locked",
                    "text-disabled": item.status === "locked",
                  })}
                >
                  <line x1="25" y1="0" x2="25" y2="50" className="svgline" />
                </svg>
              )}
            </Fragment>
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
