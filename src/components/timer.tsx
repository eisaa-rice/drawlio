"use client";

import { useState } from "react";

import Button from "./ui/button";

import { RotateCcw, Pause, Play } from "lucide-react";

const NumInput = ({
  label,
  value,
  onChange,
  min,
  max,
  digits,
  style,
}: {
  label: string;
  value: number;
  onChange: (num: number) => void;
  min: number;
  max: number;
  digits: number;
  style: string;
}) => {
  const clamp = (n: number) => {
    return Math.min(Math.max(n, min), max);
  };

  return (
    <label className="flex flex-col items-center justify-center gap-1">
      <input
        className={`text-center font-light h-10 w-[${digits}ch]
        outline-none focus:ring focus:ring-black/10 tracking-tight
        leading-none caret-transparent rounded-md
        [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none
        ${style}`}
        name={label.toLowerCase()}
        type="number"
        inputMode="numeric"
        min={min}
        max={max}
        value={value}
        onChange={(e) => {
          onChange(clamp(Number(e.target.value)));
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowUp") {
            e.preventDefault();
            onChange(clamp(value + 1));
          }
          if (e.key === "ArrowDown") {
            e.preventDefault();
            onChange(clamp(value - 1));
          }
        }}
        style={{ width: `${digits}ch` }}
      />

      <span className="text-xs text-neutral-600">{label}</span>
    </label>
  );
};

const Timer = () => {
  const [hours, setHours] = useState(1);
  const [minutes, setMinutes] = useState(30);
  const [seconds, setSeconds] = useState(10);

  return (
    <div
      className="flex flex-col items-center justify-center gap-4 mt-24 xl:mt-0
      rounded-lg shadow-md backdrop-blur-xl bg-white/50 p-4 w-52"
    >
      <div className="text-5xl font-thin flex items-center justify-center gap-2">
        <NumInput
          label="Hours"
          value={hours}
          onChange={setHours}
          min={0}
          max={99}
          digits={2}
          style="text-4xl"
        />

        <span className="pb-6 text-2xl select-none">:</span>

        <NumInput
          label="Minutes"
          value={minutes}
          onChange={setMinutes}
          min={0}
          max={59}
          digits={2}
          style="text-4xl"
        />

        <span className="pb-6 text-2xl select-none">:</span>

        <NumInput
          label="Seconds"
          value={seconds}
          onChange={setSeconds}
          min={0}
          max={59}
          digits={2}
          style="text-4xl"
        />
      </div>

      <div className="flex items-center justify-center gap-8">
        <Button onClick={() => console.log("reset")}>
          <RotateCcw
            size={24}
            strokeWidth={1}
            color="black"
            className="shrink-0"
          />
        </Button>

        <Button onClick={() => console.log("pause")}>
          <Pause size={24} strokeWidth={1} color="black" className="shrink-0" />
        </Button>

        <Button onClick={() => console.log("play")}>
          <Play size={24} strokeWidth={1} color="black" className="shrink-0" />
        </Button>
      </div>
    </div>
  );
};

export default Timer;
