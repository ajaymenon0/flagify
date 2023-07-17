import { Link, useParams } from "react-router-dom";
import { Hearts } from "../components/Hearts";
import { StrokeText } from "../components/StrokeText";
import { BackIcon } from "../components/icons/BackIcon";
import { Countries } from "../data/countries";
import { Button } from "../components/Button";
import { ProgressBar } from "../components/ProgressBar";

const getRandomCountry = () => {
  const randomIndex = Math.floor(Math.random() * Countries.length);
  const anotherRandomIndex = Math.floor(Math.random() * Countries.length);
  return {
    name: Countries[randomIndex].name,
    flag: Countries[randomIndex].image,
    wrongName: Countries[anotherRandomIndex].name,
  };
};

export const Quiz = () => {
  const { level } = useParams();
  const { name, flag, wrongName } = getRandomCountry();

  return (
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
        <div className="flex justify-center items-center mb-8">
          <Hearts score={3} />
        </div>
        <div className=" w-full h-64 bg-white-transparent rounded-sm flex items-center mb-12">
          <img
            src={flag}
            alt={name}
            className=" w-56 h-56 object-contain m-auto"
          />
        </div>
        <div className="mb-12">
          <Button text={name} type="primary" className="uppercase" />
          <p className="text-gradient text-2xl font-bold py-4">OR</p>
          <Button text={wrongName} type="secondary" className="uppercase" />
        </div>
        <div>
          <ProgressBar total={5} score={0} />
        </div>
      </section>
    </div>
  );
};
