import React, { useEffect, useState } from 'react'
import styler from "../styles/Blogs.module.css"
import Image from 'next/image'
import Link from 'next/link'

const blog = () => {
  const [allBlogs, setAllBlogs] = useState([])
  useEffect(() => {
    fetch("http://localhost:3000/api/allBlogFetcher").then((a) => {
      return a.json()
    }).then((res) => {
      setAllBlogs(res.reverse())
    })
  }, [])
  return (
    <>
      <section className={styler.banner}>
        <p className={styler.pageHead}>BLOGS</p>
        <p className={styler.quote}>"In the blog of life, every post is an opportunity for self-improvement, and every comment we leave in our community's story enriches our narrative."</p>
      </section>
      <section className={styler.blogList}>
        {
          allBlogs.map(blog => {
            return <Link href={`/getBlog/${blog.slug}`} className={styler.blogSlide}>
              <div className={styler.blogImgContainer}>
                <Image src={blog.img} height={824} width={1400} className={styler.blogImg}></Image>
              </div>
              <div className={styler.blogContent}>
                <h1 className={styler.blogHeader}>{blog.title}</h1>
                <div className={styler.blogDateAuthor}>
                  <span className={styler.blogDate}>{blog.date}</span>
                  <span className={styler.delimeter}>|</span>
                  <span className={styler.blogAuthor}>{blog.author}</span>
                </div>
                <p className={styler.blogDescripion}>{blog.description}</p>
              </div>
            </Link>
          })
        }
        <div className={styler.blogEnd}>You have reached the end!!</div>
      </section>

    </>
  )
}

export default blog