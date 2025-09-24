import PromptActions from "@/components/prompt-actions";
import Timer from "@/components/timer";
import { getDailyPrompt } from "@/lib/prompt";

import Image from "next/image";

const Home = async () => {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long", // "Monday"
    month: "long", // "September"
    day: "numeric", // "22"
    year: "numeric", // "2025"
  });

  const prompt = await getDailyPrompt();

  return (
    <div className="flex flex-col xl:flex-row items-center justify-center px-4">
      <div className="flex items-center justify-center w-full" />

      <main className="flex flex-col w-full max-w-3xl">
        <h1 className="text-2xl text-center my-4">{today}</h1>

        <div className="relative w-full h-[36rem] my-4">
          <Image
            className="object-cover rounded shadow-md" // object-cover fills container, cropping off at the edges as necessary
            fill
            src={prompt.link}
            alt={prompt.title}
            about={prompt.desc}
          />
        </div>

        <p className="italic text-neutral-600 text-center">{prompt.title}</p>

        <p className="italic text-neutral-400 text-center mt-4">
          {prompt.desc}
        </p>

        <PromptActions />
      </main>

      <div className="flex items-center justify-center w-full">
        <Timer />
      </div>
    </div>
  );
};

export default Home;
