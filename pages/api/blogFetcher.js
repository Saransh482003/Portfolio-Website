// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import *  as fs from "fs"
export default async function handler(req, res) {
  let data;
  let query = req.query.slug
  data = await fs.promises.readFile(`JSONs/Blogs/${query}.json`,"utf-8")
  data = JSON.parse(data)
  res.status(200).json(data)
}
