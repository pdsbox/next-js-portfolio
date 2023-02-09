import Layout from "@/components/Layout"
import HomeText from "@/components/Home/HomeText";
import HomeAnimation from "@/components/Home/HomeAnimation";


export default function Home() {
    return (
        <Layout>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <HomeText />
                    <HomeAnimation />
                </div>
            </section>
        </Layout>
    )
}