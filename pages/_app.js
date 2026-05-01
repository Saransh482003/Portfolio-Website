import Footer from '@/Components/footer'
import Navbar from '@/Components/navbar'
import '@/styles/globals.css'
import Head from 'next/head'
import Script from 'next/script'

export default function App({ Component, pageProps }) {
  return <>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/Saransh_Saini_Logo_Rounded.png" />
      <title>AI Engineer | Saransh Saini</title>
      <meta name="description" content="Hi! I am Saransh Saini, an AI Engineer passionate about Deep Learning, LLMs, and Computer Vision. Pursuing a BS in Data Science at IIT Madras. Welcome to my portfolio website."></meta>
    </Head>
    <Script
      id="clarity-script"
      strategy="afterInteractive"
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
    <Navbar />
    <Component {...pageProps} />
    <Footer />
  </>
}
