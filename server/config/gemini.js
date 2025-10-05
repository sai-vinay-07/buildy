const { GoogleGenerativeAI } = require("@google/generative-ai");
const dotenv = require("dotenv");

dotenv.config();

const ai = new GoogleGenerativeAI({ apiKey: process.env.GEMINI_API_KEY });

async function main({ title, features, description }) {
  try {
    // Build prompt based on caller input
    const prompt = `Given the project title "${title}", description "${description}", and features "${features}", generate the following:
- Key Considerations (array of strings)
Return the result as JSON: {keyConsiderations}`;

    // Use Gemini API as per documentation (contents is always an array)
    const response = await ai.models.generateContent({
      model: "gemini-1.5-flash",
      contents: [{ role: "user", parts: [{ text: prompt }] }]
    });

    // Parse AI response (handles code block, JSON, or plain text)
    let resultText = response.candidates?.[0]?.content?.parts?.[0]?.text || response.text || '';
    console.log("Gemini raw response:", resultText);

    // Wrap parsing in try/catch to prevent crashes
    try {
      // Remove code fencing (if AI responds as ````````)
      resultText = resultText.replace(/``````/g, '').trim();
      const parsed = JSON.parse(resultText);
      return { keyConsiderations: parsed.keyConsiderations || [] };
    } catch (parseError) {
      console.error("Failed to parse Gemini response as JSON:", parseError);
      // Fallback: return empty array
      return { keyConsiderations: [] };
    }
  } catch (error) {
    console.error("Error in Gemini API call:", error);
    throw new Error("AI service unavailable. Please try again later.");
  }
}

module.exports = main;
