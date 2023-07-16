import { Hearts } from "../components/Hearts";
import { StrokeText } from "../components/StrokeText";
import { BackIcon } from "../components/icons/BackIcon";

export const Quiz = () => {
  return (
    <div className="flex flex-col justify-content-center text-center py-8 px-6">
      <header className="flex items-center justify-between mb-8">
        <BackIcon />
        <StrokeText
          text="FLAGIFY"
          className="m-auto"
          stroke="8px"
          textSizeClass="text-3xl"
        />
        <div className="w-6" />
      </header>
      <section className="flex flex-col justify-center">
        <div className="flex justify-center items-center mb-8">
          <Hearts score={1} />
        </div>
      </section>
    </div>
  );
};
