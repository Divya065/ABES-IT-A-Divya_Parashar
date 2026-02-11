import express from "express";
import cors from "cors";
import fs from "fs";
import path from "path";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const dataDir = path.join(process.cwd(), "data");
const filePath = path.join(dataDir, "content.txt");

// Ensure folder exists
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir);
}

// WRITE FILE
app.post("/write", (req, res) => {
  const { content } = req.body;

  if (!content) {
    return res.status(400).json({ message: "Content is required" });
  }

  fs.writeFile(filePath, content, "utf8", (err) => {
    if (err) {
      console.error("WRITE ERROR:", err);
      return res.status(500).json({ message: "Failed to write file" });
    }
    res.json({ message: "File written successfully" });
  });
});

// READ FILE
app.get("/read", (req, res) => {
  fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      console.error("READ ERROR:", err);
      return res.status(500).json({ message: "Failed to read file" });
    }
    res.json({ content: data });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});