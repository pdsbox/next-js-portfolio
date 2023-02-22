import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="kr">
      <Head>
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css" />
        <link rel="icon" href="/icon16.png" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
