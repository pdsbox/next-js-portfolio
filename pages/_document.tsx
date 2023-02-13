import { Html, Head, Main, NextScript } from 'next/document'


export default function Document() {
  return (
    <Html lang="kr">
      <Head>
        <meta name="description" content="박대성의 포트폴리오" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="//cdn.jsdelivr.net/npm/xeicon@2.3.3/xeicon.min.css"></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
