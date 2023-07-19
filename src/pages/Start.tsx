import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import { StrokeText } from "../components/StrokeText";

export const Start = () => {
  return (
    <div className="flex justify-center items-center h-screen relative">
      <div className="flex flex-col items-center -translate-y-12">
        <img
          src="./rexie.png"
          alt="rexie"
          className=" self-end translate-x-8 w-20"
        />
        <StrokeText text="FLAGIFY" className="mb-16" />
        <Link to="/levels">
          <Button text="START" />
        </Link>
      </div>
    </div>
  );
};
