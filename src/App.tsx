import { Button } from "./components/Button";
import { StrokeText } from "./components/StrokeText";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-full relative">
      <div className="-mt-32">
        <img
          src="./rexie.png"
          alt="rexie"
          className="float-right translate-x-8"
        />
        <StrokeText text="FLAGIFY" className="mb-16" />
        <Button text="START" />
      </div>
    </div>
  );
}

export default App;
