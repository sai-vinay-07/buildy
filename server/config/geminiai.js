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
        "Generate a short 2–3 line project description in plain text. Keep it concise and engaging. Do not include any lists or extra formatting.";
    } else if (type === "features") {
      instruction = `
        Generate a concise list of 5–7 key features for this project.
        Return the output in clean HTML format using <ol><li>...</li></ol>.
        Each feature should be in its own <li> tag, and use <strong>...</strong> for emphasis if needed.
        Do not include titles, explanations, or extra text — only the HTML list.
      `;
    } else if (type === "keyConsiderations") {
      instruction = `
        Generate 5–6 key considerations or important implementation details for this project.
        Format strictly in HTML using <ol><li>...</li></ol>.
        Each point should be short and focused. Avoid extra text or markdown.
      `;
    }

    const result = await model.generateContent(prompt + "\n\n" + instruction);
    const text = result.response.text().trim();

    // Ensure output is clean and valid HTML
    return text.replace(/^```html|```$/g, "").trim();
  } catch (error) {
    console.error("Error calling Gemini API:", error.message);
    return `Error: ${error.message}`;
  }
}

module.exports = main;
