export const StrokeText = ({
  text = "Flagify",
  stroke = "16px",
  textSizeClass = "text-5xl",
  className = "",
  textClass = "",
}: {
  text: string;
  stroke?: string;
  className?: string;
  textSizeClass?: string;
  textClass?: string;
}) => {
  return (
    <div
      className={`${textSizeClass} font-bold flex font-lemon relative ${className}`}
    >
      <span
        className="absolute left-0 stroke-white text-white z-10"
        style={{ WebkitTextStrokeWidth: stroke, strokeWidth: stroke }}
      >
        {text}
      </span>
      <span className={`relative z-20 ${textClass || "text-primary"}`}>
        {text}
      </span>
    </div>
  );
};
