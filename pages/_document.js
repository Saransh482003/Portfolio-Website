import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap" rel="stylesheet" />
        <link rel="icon" href="/icon.png" />
        <title>Data Ki Science</title>
        <meta name="description" content="Hi! I am Saransh Saini., a dedicated student passionate about Data Science, pursuing a BS in Data Science at IIT Madras and a B.Sc. in Data Analytics at DSEU. Welcome to my portfolio website where you can explore about me in great detail. "></meta>
        <meta name='keywords' content='saransh saini, data ki science, saransh, portfolio website, web developer, nextjs, reactjs'></meta>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
