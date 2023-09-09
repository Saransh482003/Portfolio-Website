// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import *  as fs from "fs"
export default async function handler(req, res) {
  let data;
  let allBlogs = []
  data = await fs.promises.readdir("JSONs/Blogs")
  for (let b of data){
    let blog = await fs.promises.readFile(`JSONs/Blogs/${b}`,"utf-8")
    let pusher = JSON.parse(blog)
    pusher["slug"] = b.slice(0,b.length-5)
    allBlogs.push(pusher)
  }
  res.status(200).json(allBlogs)
}
