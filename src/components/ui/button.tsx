"use client";

const Button = ({
  text,
  onClick,
  style,
  children,
}: {
  text?: string;
  onClick: () => void;
  style?: string;
  children?: React.ReactNode;
}) => {
  return (
    <button
      // border border-neutral-400
      className={`flex items-center justify-center gap-4
        m-auto hover:cursor-pointer
        ${style}`}
      onClick={onClick}
    >
      {text}

      {/* icon here */}
      {children}
    </button>
  );
};

export default Button;
