import Footer from "./Footer"
import Header from "./Header"
import Head from "next/head"
export default function Layout({ children }: any) {
    return (
        <>
            <Header />
            <main>{children}</main>
            <Footer></Footer>
        </>
    )
}