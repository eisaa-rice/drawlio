"use client";

import { useState } from "react";
import Button from "./ui/button";

const Timer = () => {
  const [timer, setTimer] = useState(0);

  return (
    <div className="flex flex-col items-center justify-center gap-4">
      <div
        className="h-24 w-24 border border-neutral-400 rounded-full
      flex items-center justify-center text-5xl font-thin text-neutral-800"
      >
        {timer}
      </div>

      <div className="flex items-center justify-center gap-8">
        <Button text="-" onClick={() => setTimer((prev) => prev - 5)} />

        <select name="time-unit" className="">
          <option value="seconds">Seconds</option>
          <option value="minutes">Minutes</option>
          <option value="hours">Hours</option>
        </select>

        <Button text="+" onClick={() => setTimer((prev) => prev + 5)} />
      </div>
    </div>
  );
};

export default Timer;
