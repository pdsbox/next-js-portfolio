import Footer from "./Footer"
import Header from "./Header"
import Head from "next/head"
export default function Layout({ children }: any) {
    return (
        <>
            <Head>
                <title>박대성 포트폴리오</title>
                <meta name="description" content="박대성의 포트폴리오" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Header />
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}