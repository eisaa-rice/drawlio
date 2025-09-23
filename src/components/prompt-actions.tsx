"use client";

import Button from "./ui/button";
import { Image as ImageIcon, Upload } from "lucide-react";

const PromptActions = () => {
  return (
    <div
      className="flex flex-col sm:flex-row items-center justify-center 
      mt-12 mx-32 gap-4 sm:gap-20"
    >
      {/* upload their own reference photo */}
      <Button
        text="Upload Photo"
        onClick={() => console.log("upload photo")}
        style="px-6 py-3 text-neutral-800 whitespace-nowrap
        rounded-full shadow-md bg-white 
        hover:cursor-pointer hover:scale-105 transition-all"
      >
        <ImageIcon
          size={20}
          strokeWidth={1}
          color="black"
          className="shrink-0"
        />
      </Button>

      {/* upload their drawing */}
      <Button
        text="Submit Drawing"
        onClick={() => console.log("submit drawing")}
        style="px-6 py-3 text-white whitespace-nowrap
        rounded-full shadow-md shadow-neutral-400 bg-neutral-800
        hover:cursor-pointer hover:scale-105 transition-all"
      >
        <Upload size={20} strokeWidth={1} color="white" className="shrink-0" />
      </Button>
    </div>
  );
};

export default PromptActions;
