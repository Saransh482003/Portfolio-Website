// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import *  as fs from "fs"
export default async function handler(req, res) {
  let data;
  let allProjects = []
  for (let i of ["Completed","Ongoing","On Hold","Future Plans"]){
    data = fs.promises.readFile(`JSONs/Projects/${i}.json`,"utf-8")
    data = await data
    allProjects.push(JSON.parse(data))
  }


  res.status(200).json(allProjects)
}
