"use client";

const Button = ({
  text,
  // icon,
  onClick,
  style,
}: {
  text: string;
  // icon: string;
  onClick: () => void;
  style?: string;
}) => {
  return (
    <button
      className={`px-4 py-2 w-fit mx-auto border border-neutral-400 rounded
        hover:cursor-pointer hover:bg-neutral-100
        transition-all ${style}`}
      onClick={onClick}
    >
      {text}

      {/* icon here */}
    </button>
  );
};

export default Button;
