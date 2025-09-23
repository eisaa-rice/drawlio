"use client";

const Button = ({ text, onClick }: { text: string; onClick: () => void }) => {
  return (
    <button
      className="p-2 w-fit mt-4 mx-auto border border-neutral-400 rounded
        hover:cursor-pointer hover:bg-neutral-100
        transition-all "
      onClick={onClick}
    >
      {text}

      {/* icon here */}
    </button>
  );
};

export default Button;
