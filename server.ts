import express from "express";
import path from "path";
import dotenv from "dotenv";
import { createServer as createViteServer } from "vite";
import { QUESTION_BANK } from "./src/questionBank";

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// API endpoint to serve trivia questions from local bank
app.post("/api/quiz", (req, res) => {
  const { countryId, levelId, levelIndex, lastQuestionId } = req.body;

  if (!countryId || !levelId || levelIndex === undefined) {
    return res.status(400).json({ error: "countryId, levelId, and levelIndex are required" });
  }

  const countryLower = countryId.toLowerCase();
  
  // Access the country data from the bank
  const countryQuestions = QUESTION_BANK[countryLower];
  if (!countryQuestions) {
    return res.status(400).json({ error: `No questions found for country: ${countryId}` });
  }

  // Access the specific level (1, 2, or 3)
  const levelQuestions = countryQuestions[levelIndex];
  if (!levelQuestions || levelQuestions.length === 0) {
    return res.status(400).json({ error: `No questions found for level: ${levelIndex}` });
  }

  // Filter out the last question to avoid immediate repetition
  let availableQuestions = levelQuestions;
  if (lastQuestionId && levelQuestions.length > 1) {
    availableQuestions = levelQuestions.filter(q => q.id !== lastQuestionId);
  }

  // Pick a random question
  const randomIndex = Math.floor(Math.random() * availableQuestions.length);
  const selectedQuestion = availableQuestions[randomIndex];

  return res.json(selectedQuestion);
});

// Vite integration middleware
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
    console.log("Vite middleware mounted in Development mode.");
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
    console.log("Serving static production assets from /dist.");
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server successfully booted on port ${PORT}`);
  });
}

startServer();
