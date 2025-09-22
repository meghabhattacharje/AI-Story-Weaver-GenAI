import { GoogleGenAI } from "@google/genai";
import { StoryPart } from '../types';

// Fix: Switched from `import.meta.env.VITE_API_KEY` to `process.env.API_KEY` to align with the coding guidelines and fix the TypeScript error.
const apiKey = process.env.API_KEY;

if (!apiKey) {
    throw new Error("API_KEY environment variable not found.");
}

const ai = new GoogleGenAI({ apiKey });

export async function continueStory(history: StoryPart[]): Promise<string> {
    const model = 'gemini-2.5-flash';
    
    // Construct a single prompt from the story history
    const prompt = history.map(part => {
        return `${part.author === 'user' ? 'User' : 'Storyteller'}: ${part.text}`;
    }).join('\n\n');

    const systemInstruction = `You are a master storyteller. Your task is to continue the story based on the user's input.
- Weave an engaging and imaginative narrative.
- Keep your response to one or two paragraphs.
- End your part of the story at a natural point, inviting the user to continue.
- Do not repeat the user's last sentence. Jump right into continuing the story.
- Maintain a consistent tone and style with the previous parts of the story.`;

    try {
        const response = await ai.models.generateContent({
            model: model,
            contents: prompt,
            config: {
                systemInstruction: systemInstruction,
                temperature: 0.8,
                topP: 0.95,
            }
        });

        if (response && response.text) {
            return response.text;
        } else {
            throw new Error("Received an empty response from the AI.");
        }
    } catch (error) {
        console.error("Error calling Gemini API:", error);
        throw new Error("Failed to get a response from the AI. Please try again.");
    }
}