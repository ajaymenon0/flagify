import localforage from "localforage";
import { LevelItem } from "./types";
import { leveldata } from "./data/levels";

export const generateRandomNumbers = (x: number, n: number): number[] => {
  const randomNumbers: number[] = [];
  while (randomNumbers.length < x) {
    const randomNumber = Math.floor(Math.random() * n);
    if (!randomNumbers.includes(randomNumber)) {
      randomNumbers.push(randomNumber);
    }
  }
  return randomNumbers;
};

export const onLevelComplete = async (level: number) => {
  const leveldata: LevelItem[] | null = await localforage.getItem("levels");
  if (leveldata) {
    leveldata[level - 1].status = "completed";
    if (level < 7) {
      if (leveldata[level].status === "locked") {
        leveldata[level].status = "unlocked";
      }
    }
    await localforage.setItem("levels", leveldata);
  }
  console.log(leveldata);
};

export const getLevelData = async () => {
  const data = await localforage.getItem<LevelItem[]>("levels");
  if (data) {
    return data;
  } else {
    return leveldata;
  }
};

export const deleteLevelData = async () => {
  await localforage.removeItem("levels");
  return true;
};
