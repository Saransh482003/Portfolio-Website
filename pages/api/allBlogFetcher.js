// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import *  as fs from "fs"
import path from "path"
export default async function handler(req, res) {
  try{
    let allBlogs = []
    let data = await fs.promises.readdir(path.join(process.cwd(),"JSONs","Blogs"))
    for (let b of data){
    const filePath = path.join(process.cwd(),"JSONs","Blogs",`${b}`)
    let blog = await fs.promises.readFile(filePath,"utf-8")
    let pusher = JSON.parse(blog)
    pusher["slug"] = b.slice(0,b.length-5)
    allBlogs.push(pusher)
    }
    res.status(200).json(allBlogs)
  }
  catch(error){
    console.error("Error reading JSON file:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }

}
