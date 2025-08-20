// tools/generate-llms.js
import fs from "fs";
import path from "path";

const llms = [
  { id: "openai:gpt-4o-mini", name: "OpenAI GPT-4o-mini" },
  { id: "openai:gpt-4-turbo", name: "OpenAI GPT-4 Turbo" },
  { id: "anthropic:claude-3-opus", name: "Claude 3 Opus" },
  { id: "mistral:7b", name: "Mistral 7B" }
];

const outputDir = path.join(process.cwd(), "src/generated");
const outputFile = path.join(outputDir, "llms.json");

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputFile, JSON.stringify(llms, null, 2), "utf-8");

console.log(`✅ LLM list generated at ${outputFile}`);
