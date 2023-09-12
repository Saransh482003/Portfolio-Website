import fs from "fs/promises";
import path from "path";

export default async function handler(req, res) {
  try {
    // Construct an absolute path to your JSON file
    const filePath = path.join(process.cwd(),"JSONs", "Learn", "lecture.json");

    // Read the JSON file
    const data = await fs.readFile(filePath, "utf-8");

    // Parse and send the JSON data as a response
    res.status(200).json(JSON.parse(data));
  } catch (error) {
    console.error("Error reading JSON file:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
}
