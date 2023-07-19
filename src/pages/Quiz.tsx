import { Link, redirect, useParams } from "react-router-dom";
import { Hearts } from "../components/Hearts";
import { StrokeText } from "../components/StrokeText";
import { BackIcon } from "../components/icons/BackIcon";
import { Countries } from "../data/countries";
import { Button } from "../components/Button";
import { ProgressBar } from "../components/ProgressBar";
import { leveldata } from "../data/levels";
import { useEffect, useMemo, useState } from "react";
import { generateRandomNumbers } from "../utils";
import { LockedIcon } from "../components/icons/LockedIcon";
import { LoseModal, Modal, WinModal } from "../components/Modal";

// const getRandomCountry = () => {
//   const randomIndex = Math.floor(Math.random() * Countries.length);
//   const anotherRandomIndex = Math.floor(Math.random() * Countries.length);
//   return {
//     name: Countries[randomIndex].name,
//     flag: Countries[randomIndex].image,
//     wrongName: Countries[anotherRandomIndex].name,
//   };
// };

const LockedLevelScreen = () => (
  <div className="flex flex-col justify-content-center text-center py-8 px-6 z-20 relative">
    <header className="flex items-center justify-between mb-8">
      <Link to="/levels" className="z-20">
        <BackIcon />
      </Link>
      <StrokeText
        text="FLAGIFY"
        className="m-auto"
        stroke="8px"
        textSizeClass="text-2xl"
      />
      <div className="w-6" />
    </header>
    <section className="flex flex-col justify-center">
      <div className=" bg-white-transparent w-full rounded-md flex flex-col items-center py-10">
        <LockedIcon className=" text-primary mb-6" />
        <span className=" text-xl uppercase font-jua text-primary">
          This level is locked
        </span>
        <Link to="/levels" className="z-20">
          <Button text="◀ Let's go back" type="secondary" className="mt-6" />
        </Link>
      </div>
    </section>
  </div>
);

const setQuizData = (maxScore: number) => {
  const totalQuestions = maxScore * 2 + 10;
  const countryIndices = generateRandomNumbers(
    totalQuestions,
    Countries.length
  );

  const correctHalf = countryIndices.slice(0, totalQuestions / 2);
  const wrongHalf = countryIndices.slice(totalQuestions / 2, totalQuestions);

  return correctHalf.map((country, index) => {
    return {
      name: Countries[country].name,
      flag: Countries[country].image,
      wrongName: Countries[wrongHalf[index]].name,
      flipped: Math.random() > 0.5,
    };
  });
};

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [levelScore, setLevelScore] = useState<number>(0);
  const [heartLevel, setHeartLevel] = useState<0 | 1 | 2 | 3>(3);
  const [showLoseModal, setShowLoseModal] = useState<boolean>(false);
  const [showWinModal, setShowWinModal] = useState<boolean>(false);

  const { level } = useParams();
  const currentLevel = useMemo(
    () => (level ? leveldata?.[Number(level) - 1] : leveldata?.[0]),
    [level]
  );

  const isLockedLevel = useMemo(
    () => currentLevel?.status === "locked",
    [currentLevel]
  );

  const questions = useMemo(
    () => setQuizData(currentLevel.maxScore),
    [currentLevel.maxScore]
  );

  useEffect(() => {
    if (levelScore === currentLevel.maxScore) {
      setShowWinModal(true);
    }
  }, [levelScore, currentLevel.maxScore]);

  if (isLockedLevel) return <LockedLevelScreen />;

  const onGuess = (isRight: boolean) => {
    setCurrentQuestion((prevQIndex) => prevQIndex + 1);
    if (isRight) {
      setLevelScore((prevScore) => prevScore + 1);
    } else {
      setHeartLevel((prevHeartLevel) => {
        // some TS bullshit I need to figure out
        switch (prevHeartLevel) {
          case 3:
            return 2;
          case 2:
            return 1;
          case 1:
            setShowLoseModal(true);
            return 0;
          default:
            return 0;
        }
      });
    }
  };

  return (
    <div className="flex flex-col justify-content-center text-center py-8 px-6 z-20 relative">
      {showLoseModal && <LoseModal />}
      {showWinModal && <WinModal level={level} />}
      <header className="flex items-center justify-between mb-8">
        <Link to="/levels" className="z-20">
          <BackIcon />
        </Link>
        <StrokeText
          text="FLAGIFY"
          className="m-auto"
          stroke="8px"
          textSizeClass="text-2xl"
        />
        <div className="w-6" />
      </header>
      <section className="flex flex-col justify-center">
        <div className="flex justify-center items-center mb-8">
          <Hearts score={heartLevel} />
        </div>
        <div className=" w-full h-64 bg-white-transparent rounded-sm flex items-center mb-12">
          <img
            src={questions[currentQuestion]?.flag || ""}
            alt={questions[currentQuestion].name}
            className=" w-56 h-56 object-contain m-auto"
          />
        </div>
        <div className="mb-12">
          {!questions[currentQuestion].flipped ? (
            <>
              <Button
                text={questions[currentQuestion].name}
                type="primary"
                className="uppercase"
                onClick={() => onGuess(true)}
              />
              <p className="text-gradient text-2xl font-bold py-4">OR</p>
              <Button
                text={questions[currentQuestion].wrongName}
                type="secondary"
                className="uppercase"
                onClick={() => onGuess(false)}
              />
            </>
          ) : (
            <>
              <Button
                text={questions[currentQuestion].wrongName}
                type="primary"
                className="uppercase"
                onClick={() => onGuess(false)}
              />
              <p className="text-gradient text-2xl font-bold py-4">OR</p>
              <Button
                text={questions[currentQuestion].name}
                type="secondary"
                className="uppercase"
                onClick={() => onGuess(true)}
              />
            </>
          )}
        </div>
        <div>
          <ProgressBar total={currentLevel.maxScore} score={levelScore} />
        </div>
      </section>
    </div>
  );
};