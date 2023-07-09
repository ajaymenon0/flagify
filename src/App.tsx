import { Link } from "react-router-dom";
import { Button } from "./components/Button";
import { StrokeText } from "./components/StrokeText";

function App() {
  return (
    <div className="flex justify-center items-center h-screen relative">
      <div>
        <img
          src="./rexie.png"
          alt="rexie"
          className="float-right translate-x-8 w-20"
        />
        <StrokeText text="FLAGIFY" className="mb-16" />
        <Link to="/levels">
          <Button text="START" />
        </Link>
      </div>
    </div>
  );
}

export default App;
