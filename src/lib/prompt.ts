export type Prompt = {
  id: string;
  title: string;
  desc: string;
  link: string;
  instructions: string;
  referenceUrl: string;
};

export const getDailyPrompt = async (): Promise<Prompt> => {
  return {
    id: "2025-09-22",
    title: "shallow focus photography of woman outdoor during day",
    desc: "Download this free HD photo of woman, portrait, girl, and people by Christopher Campbell (@chrisjoelcampbell)",
    link: "/image.jpg",
    referenceUrl:
      "https://unsplash.com/photos/shallow-focus-photography-of-woman-outdoor-during-day-rDEOVtE7vOs",
    instructions: "focus on planes of the face; 30 min timer.",
  };
};
