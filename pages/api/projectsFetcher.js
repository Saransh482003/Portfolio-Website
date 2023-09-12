// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import *  as fs from "fs"
import path from "path"
export default async function handler(req, res) {
  let allProjects = []
  for (let i of ["Completed","Ongoing","On Hold","Future Plans"]){
    const filePath  = path.join(process.cwd(),"JSONs","Projects",`${i}.json`)
    let data = fs.promises.readFile(filePath,"utf-8")
    data = await data
    allProjects.push(JSON.parse(data))
  }


  res.status(200).json(allProjects)
}
