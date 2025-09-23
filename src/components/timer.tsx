"use client";

import { useState } from "react";

import Button from "./ui/button";

import { Square, Pause, Play } from "lucide-react";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  return (
    <div
      className="flex flex-col items-center justify-center gap-4 m-6
      border border-neutral-600 rounded-2xl p-4
      xl:fixed xl:top-2/5 xl:right-4 backdrop-blur-3xl"
    >
      <div className="text-5xl font-thin">
        {hours} : {minutes} : {seconds}
      </div>

      <div className="flex items-center justify-center gap-2">
        <Button onClick={() => setSeconds((prev) => prev - 5)}>
          <Square
            size={20}
            strokeWidth={1}
            color="black"
            className="shrink-0 fill-black"
          />
        </Button>

        <Button onClick={() => setSeconds((prev) => prev + 5)}>
          <Pause
            size={20}
            strokeWidth={1}
            color="black"
            className="shrink-0 fill-black"
          />
        </Button>

        <Button onClick={() => setSeconds((prev) => prev + 5)}>
          <Play
            size={20}
            strokeWidth={1}
            color="black"
            className="shrink-0 fill-black"
          />
        </Button>
      </div>
    </div>
  );
};

export default Timer;
