import { NextResponse } from "next/server";
import { getDailyPrompt } from "@/lib/prompt";

export async function GET() {
  const prompt = await getDailyPrompt();

  return NextResponse.json(prompt);
}
