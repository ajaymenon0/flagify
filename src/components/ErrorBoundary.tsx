import { Link, useRouteError } from "react-router-dom";
import { StrokeText } from "./StrokeText";
import { Button } from "./Button";

export const ErrorBoundary = () => {
  const error = useRouteError();
  console.error(error);
  // Uncaught ReferenceError: path is not defined
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <StrokeText
        text="Uh oh!"
        className="mb-12"
        stroke="8px"
        textClass="text-quaternary"
      />
      <StrokeText
        text="Something went wrong"
        className=""
        stroke="8px"
        textSizeClass="text-3xl"
        textClass="text-quaternary"
      />
      <Link to="/levels" className="z-20">
        <Button
          text="Take me back"
          type="primary"
          className="mt-12 uppercase"
        />
      </Link>
    </div>
  );
};
