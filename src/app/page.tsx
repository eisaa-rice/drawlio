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
    <main
      className="flex flex-col items-center justify-center 
      max-w-3xl m-auto px-4 py-12"
    >
      <h1 className="text-2xl text-center font-medium mb-6">{today}</h1>

      {/* <div className="w-2/3 h-px bg-neutral-500 rounded-full mt-2 mb-6" /> */}

      <div className="">
        <div className="relative w-full h-[36rem]">
          <Image
            className="object-cover rounded shadow-md" // object-cover fills container, cropping off at the edges as necessary
            fill
            src={prompt.link}
            alt={prompt.title}
            about={prompt.desc}
          />
        </div>

        <p className="italic text-neutral-600 my-6">{prompt.title}</p>

        <p className="italic text-neutral-400">{prompt.desc}</p>
      </div>

      <PromptActions />

      <Timer />
    </main>
  );
};

export default Home;
