const dotenv = require("dotenv");
const { GoogleGenerativeAI } = require("@google/generative-ai");

dotenv.config();

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function main(prompt, type = "description") {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

    // Append type-specific instruction
    let instruction = "";
    if (type === "description") {
      instruction =
        " Generate a 2-3 lines short project description in plain text. Do not include options or explanations.";
    } else if (type === "features") {
      instruction =
        " Generate a concise list of 5-7 key features for this project in plain text. Do not include options or explanations.";
    } else if (type === "keyConsiderations") {
      instruction =
        " Generate 5-6 key considerations or important points for this project in plain text. Do not include options or explanations.";
    }

    const result = await model.generateContent(prompt + instruction);

    const text = result.response.text();
    return text;
  } catch (error) {
    console.error("Error calling Gemini API:", error.message);
    return `Error: ${error.message}`;
  }
}

module.exports = main;
