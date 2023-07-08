export const Button = ({ text }: { text: string }) => {
  return (
    <button className=" bg-white font-jua text-quaternary px-9 rounded py-5 z-10 w-250 text-2xl shadow-red active:shadow-redDown">
      {text}
    </button>
  );
};
