"use client";

import { useState } from "react";
import Button from "./ui/button";

const Timer = () => {
  const [seconds, setSeconds] = useState(0);

  return (
    <div>
      <div>{seconds}</div>

      <div>
        <Button text="+" onClick={() => console.log("")} />

        <Button text="+" onClick={() => console.log("")} />
      </div>
    </div>
  );
};

export default Timer;
