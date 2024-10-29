import Footer from '@/Components/footer'
import Navbar from '@/Components/navbar'
import '@/styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }) {

  return <>
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
      <link rel="icon" href="/Saransh_Saini_Logo.png" />
      <title>Full Stack Developer & ML Enthusiast | Saransh Saini</title>
      <meta name="description" content="Hi! I am Saransh Saini., a dedicated student passionate about Data Science, pursuing a BS in Data Science at IIT Madras and a B.Sc. in Data Analytics at DSEU. Welcome to my portfolio website where you can explore about me in great detail. "></meta>
      <script
    dangerouslySetInnerHTML={{
      __html: `
        (function(c,l,a,r,i,t,y){
          c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
          t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
          y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "larkax97v9");
      `,
    }}
  />
    </Head>
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}
