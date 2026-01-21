import { GoogleGenAI, Chat, GenerateContentResponse } from "@google/genai";

// Initialize Gemini Client
// NOTE: We are assuming process.env.API_KEY is available as per instructions.
// If not, we provide a placeholder to prevent the app from crashing on boot.
const apiKey = process.env.API_KEY || 'MISSING_API_KEY';
const ai = new GoogleGenAI({ apiKey });

const SYSTEM_INSTRUCTION = `
You are the Tactical Operations AI (TacOps-AI) for IkraSim, a leading military simulation company.
Your role is to provide briefing summaries, answer technical questions about our simulators (Jet, Drone, Infantry), 
and assist potential government or private defense clients.

Tone: Professional, terse, military-spec, concise. Use military jargon where appropriate (e.g., "Affirmative", "Copy that", "Intel suggests").
Do not be overly flowery. Stick to the facts.

Key Intel:
- Jet Sims: 1:1 Cockpit replication, 9G motion platforms, ultra-realistic physics engine.
- Drone Systems: Zero-latency remote piloting, EW (Electronic Warfare) simulation modules.
- Ballistics: Recoil-simulation, dynamic environmental ballistics (wind, humidity, coriolis effect).
- Security: ISO 27001 certified, TAA compliant.

If the user asks about pricing, state that clearance is required and direct them to the "Enlist" (Contact) form.
`;

export const createBriefingChat = (): Chat => {
  return ai.chats.create({
    model: 'gemini-3-flash-preview',
    config: {
      systemInstruction: SYSTEM_INSTRUCTION,
      temperature: 0.7,
      maxOutputTokens: 500,
    },
  });
};

export const sendBriefingMessage = async (chat: Chat, message: string): Promise<string> => {
  try {
    const response: GenerateContentResponse = await chat.sendMessage({ message });
    return response.text || "Transmission interrupted. Please retry.";
  } catch (error) {
    console.error("Comms Failure:", error);
    return "Signal lost. Unable to process request. Check encryption keys (API Key).";
  }
};
