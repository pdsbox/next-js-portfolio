import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content="박대성의 포트폴리오" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>박대성 포트폴리오</title>

      </Head>
      <Component {...pageProps} />
    </>
  )
}
