// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import *  as fs from "fs"
import path from "path"
export default async function handler(req, res) {
  const filePath  = path.join(process.cwd(),"JSONs","Projects","AllProjects.json")
  let data = await fs.promises.readFile(filePath,"utf-8")
  let allProjects = JSON.parse(data)
  res.status(200).json(allProjects)
}
