import { StrokeText } from "./StrokeText";
import { Button } from "./Button";
import { Link } from "react-router-dom";

const Modal = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className=" fixed w-full h-full bg-[#ffffffaa] top-0 left-0 z-30" />
      <div className=" fixed top-1/4 left-0 w-full z-40">{children}</div>
    </>
  );
};

export const WinModal = ({ level }: { level?: string }) => {
  let message = "";
  if (level) {
    message = `Level ${level} Completed`;
  } else {
    message = `Level Completed`;
  }

  return (
    <Modal>
      <div className="p-10 w-11/12 max-w-md m-auto bg-secondary border-white border-4 rounded-lg overflow-clip flex flex-col items-center justify-center">
        <img src="/rexie.png" alt="rexie" className="translate-x-4 w-30 mb-4" />
        <StrokeText
          text="Woohoo!"
          className="text-2xl text-center mb-4"
          textClass=" text-quaternary"
          stroke="7px"
        />
        <StrokeText
          text={message}
          className="text-xl text-center"
          textClass=" text-quaternary"
          stroke="7px"
        />
        <Link to="/levels">
          <Button
            text="Next Level 🪜"
            type="primary"
            className="mt-8 uppercase"
          />
        </Link>
      </div>
    </Modal>
  );
};

export const LoseModal = () => {
  const message = ["Almost!", "So close!", "You got this!"];
  const randomMessage = message[Math.floor(Math.random() * message.length)];

  return (
    <Modal>
      <div className="p-10 w-11/12 max-w-md m-auto bg-secondary border-white border-4 rounded-lg overflow-clip flex flex-col items-center justify-center">
        <StrokeText
          text={randomMessage}
          className="text-2xl text-center mb-4"
          textClass=" text-quaternary"
          stroke="7px"
        />
        <StrokeText
          text="Let's give it another shot"
          className="text-xl text-center"
          textClass=" text-quaternary"
          stroke="7px"
        />
        <Button
          onClick={() => window.location.reload()}
          text="Try Again"
          type="primary"
          className="mt-8 uppercase"
        />
      </div>
    </Modal>
  );
};
