const { GoogleGenerativeAI } = require("@google/generative-ai");
require("dotenv").config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = "gemini-2.5-flash";

async function runGemini(prompt) {
  const MAX_RETRIES = 3;
  let delay = 1000;
  for (let i = 0; i < MAX_RETRIES; i++) {
    try {
      const response = await genAI.getGenerativeModel({ model }).generateContent(prompt);
      return response.text();
    } catch (error) {
      if (i < MAX_RETRIES - 1) {
        await new Promise((r) => setTimeout(r, delay));
        delay *= 2;
      } else {
        throw new Error("Gemini API call failed.");
      }
    }
  }
}

module.exports = { runGemini };
