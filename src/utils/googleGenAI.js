import { GoogleGenAI } from "@google/genai";
import { GOOGLE_API_KEY } from "./constant";

const ai = new GoogleGenAI({ apiKey:GOOGLE_API_KEY});

export default ai;