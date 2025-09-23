"use client";

import Button from "./ui/button";

const PromptActions = () => {
  return (
    <div className="flex items-center justify-center mt-4 mx-32 gap-4">
      {/* upload their own reference photo */}
      <Button text="Upload Photo" onClick={() => console.log("upload photo")} />

      {/* upload their drawing */}
      <Button
        text="Submit Drawing"
        onClick={() => console.log("submit drawing")}
      />
    </div>
  );
};

export default PromptActions;
