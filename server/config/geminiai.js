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
        "  Generate a list of 5–7 key features for this project. Each feature should be written as a short, clear sentence — no bold text or formatting. Present them as simple bullet points, each starting with a “•” or “✔️” icon. The style should match this example: ✔️ Add & Manage Tasks: Users can easily add, edit, and delete tasks through an intuitive interface. ✔️ Task Completion Toggle: Mark tasks as complete or incomplete with a single click. ✔️ Priority Levels: Categorize tasks by priority (High, Medium, Low) for better organization.Do not include options or explanations.";
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
