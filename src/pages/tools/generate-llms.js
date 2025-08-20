// tools/generate-llms.js
import fs from "fs";
import path from "path";

// الموديلات المدعومة (تقدر تعدلها حسب حاجتك)
const llms = [
  { id: "openai:gpt-4o-mini", name: "OpenAI GPT-4o-mini" },
  { id: "openai:gpt-4-turbo", name: "OpenAI GPT-4 Turbo" },
  { id: "anthropic:claude-3-opus", name: "Claude 3 Opus" },
  { id: "mistral:7b", name: "Mistral 7B" }
];

// المسار اللي راح نخزن فيه الملف المولد
const outputDir = path.join(process.cwd(), "src/generated");
const outputFile = path.join(outputDir, "llms.json");

// نتأكد إن المجلد موجود
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

// نكتب البيانات كـ JSON
fs.writeFileSync(outputFile, JSON.stringify(llms, null, 2), "utf-8");

console.log(`✅ LLM list generated at ${outputFile}`);
