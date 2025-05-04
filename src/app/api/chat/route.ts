import { openai } from "@ai-sdk/openai";
import {
  streamText,
  tool,
  experimental_generateImage as generateImage,
} from "ai";
import { z } from "zod";

export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const result = streamText({
    model: openai("gpt-4o"),
    messages,
    system:
      "You are a professional writer. " +
      "You write simple, clear, and concise Japanese content.",
    // prompt: `Summarize the following article in 3-5 sentences: ${article}`,
    tools: {
      // generateImageTool: tool({
      //   description: "Generate an image based on a prompt",
      //   parameters: z.object({
      //     prompt: z.string().describe("The prompt to generate an image for"),
      //   }),
      //   execute: async ({ prompt }) => {
      //     const image = await generateImage({
      //       model: openai("dall-e-3"),
      //       prompt,
      //       maxImagesPerCall: 1,
      //     });
      //     return { image };
      //   },
      // }),
    },
  });

  return result.toDataStreamResponse();
}
