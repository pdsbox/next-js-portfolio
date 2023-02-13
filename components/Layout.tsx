import Footer from "./Footer"
import Header from "./Header"
import Head from "next/head"
export default function Layout({ children }: any) {
    return (
        <>
            <Head>
                <title>박대성 포트폴리오</title>
            </Head>
            <Header />
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}