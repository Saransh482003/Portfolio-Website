// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import *  as fs from "fs"
export default async function handler(req, res) {
  let data;
  console.log("grs")
  data = fs.promises.readFile("JSONs/Learn/lecture.json","utf-8")
  data = await data
  console.log(data)

  res.status(200).json(JSON.parse(data))
  // res.status(200).json({"ret":12})
}
