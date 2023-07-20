import { motion } from "framer-motion";
import { StrokeText } from "./StrokeText";
import { BackIcon } from "./icons/BackIcon";
import { Link } from "react-router-dom";

export const QuizLoad = ({ level }: { level: string }) => (
  <div className="flex flex-col justify-content-center text-center py-8 px-6 z-20 relative max-w-xl m-auto">
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
    <motion.section
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.4 }}
      className="flex flex-col items-center justify-center pt-24"
    >
      <img src="/rexie.png" alt="rexie" className="w-40 mb-12 translate-x-4" />
      <StrokeText
        text={Number(level) === 7 ? `Level ${level}!` : "Final Level!"}
        className="m-auto"
        stroke="8px"
        textSizeClass="text-6xl mb-3"
      />
      <StrokeText
        text="Lets go!"
        className="m-auto"
        stroke="8px"
        textSizeClass="text-3xl"
        textClass="text-quaternary"
      />
    </motion.section>
  </div>
);
