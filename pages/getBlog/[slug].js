import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import styler from "../../styles/OneBlog.module.css"
import Image from 'next/image'


const slug = () => {
    const router = useRouter()
    const [sluger, setSluger] = useState()
    const [blog, setBlog] = useState({})
    const [headings, setHeadings] = useState([])
    useEffect(() => {
        setSluger(router.query.slug)
    }, [router.isReady])
    useEffect(() => {
        if (sluger) {
            console.log(sluger)
            fetch(`http://localhost:3000/api/blogFetcher?slug=${sluger}`).then((a) => {
                return a.json()
            }).then((res) => {
                setBlog(res)
                setHeadings(Object.keys(res.content))
            })
        }
    }, [sluger])
    return (
        <>
            <section className={styler.blogSpace}>
                <div className={styler.banner}>
                    <Image src={blog.img} height={824} width={1400} className={styler.blogImg}></Image>
                </div>
                <div className={styler.blogData}>
                    <h1 className={styler.blogTitle}>{blog.title}</h1>
                    <div className={styler.blogDateAuthor}>
                        <span className={styler.blogDate}>{blog.date}</span>
                        <span className={styler.delimeter}>|</span>
                        <span className={styler.blogAuthor}>{blog.author}</span>
                    </div>
                    {
                        headings.map(heading => (
                            <div className={styler.subContent}>
                                <p className={styler.heading}>#  {heading}</p>
                                <p className={styler.subContent}>{blog.content[heading]}</p>
                            </div>
                        ))
                    }
                </div>
            </section>

        </>
    )
}

export default slug