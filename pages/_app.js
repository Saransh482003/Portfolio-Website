import Footer from '@/Components/footer'
import Navbar from '@/Components/navbar'
import '@/styles/globals.css'
import Head from 'next/head'

export default function App({ Component, pageProps }) {

  return <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
      <link rel="icon" href="/icon.png" />
      <title>Data Ki Science</title>
      <meta name="description" content="Hi! I am Saransh Saini., a dedicated student passionate about Data Science, pursuing a BS in Data Science at IIT Madras and a B.Sc. in Data Analytics at DSEU. Welcome to my portfolio website where you can explore about me in great detail. "></meta>
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer/>
  </>
}
