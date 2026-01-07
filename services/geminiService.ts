
import { GoogleGenAI, Type } from "@google/genai";

export const getSkincareAdvice = async (userInput: string) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: userInput,
    config: {
      systemInstruction: "You are Aura-Prime, a high-end AI skincare consultant for the luxury bio-aesthetic brand Envision Aura. Provide professional, elite advice and suggest product types. Be elegant, concise, and helpful. Mention that Envision Aura products are engineered using molecular diffraction and bio-available elements.",
      temperature: 0.7,
      maxOutputTokens: 500,
    },
  });

  return response.text;
};

export const analyzeProductIngredients = async (productName: string, ingredients: string[]) => {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const prompt = `Analyze the benefits of these ingredients for the product "${productName}": ${ingredients.join(', ')}.`;
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: prompt,
    config: {
      systemInstruction: "You are a specialist bio-chemist for Envision Aura. Briefly explain the synergy of the provided ingredients. Keep it to 3 bullet points. Professional and scientific tone.",
    }
  });

  return response.text;
};
