"use client";

import { useState } from "react";

import Button from "./ui/button";
import Input from "./ui/input";

import { Square, Pause, Play } from "lucide-react";

const Timer = () => {
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(10);

  const handleChange = (value: number, func: (val: number) => void) => {
    if (value > 1 && value < 99) {
      func(value);
    }
  };

  return (
    <div
      className="flex flex-col items-center justify-center gap-4
      fixed bottom-4 right-4
      rounded-lg shadow-md backdrop-blur-3xl bg-white/50 p-4"
    >
      <div className="text-5xl font-thin flex items-center justify-center gap-2">
        <Input
          label="Hours"
          labelStyle="text-sm font-normal"
          type="number"
          width={2}
          inputStyle="text-3xl"
          value={hours}
          onChange={(e) => setHours(Number(e.target.value))}
        />

        <Input
          label="Minutes"
          labelStyle="text-sm font-normal"
          type="number"
          width={2}
          inputStyle="text-3xl"
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
        />

        <Input
          label="Seconds"
          labelStyle="text-sm font-normal"
          type="number"
          width={2}
          inputStyle="text-3xl"
          value={seconds}
          onChange={(e) => setSeconds(Number(e.target.value))}
        />
      </div>

      <div className="flex items-center justify-center gap-8">
        <Button onClick={() => setSeconds((prev) => prev - 5)}>
          <Square
            size={24}
            strokeWidth={1}
            color="black"
            className="shrink-0 fill-black"
          />
        </Button>

        <Button onClick={() => setSeconds((prev) => prev + 5)}>
          <Pause
            size={24}
            strokeWidth={1}
            color="black"
            className="shrink-0 fill-black"
          />
        </Button>

        <Button onClick={() => setSeconds((prev) => prev + 5)}>
          <Play
            size={24}
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
