import Layout from "@/components/Layout"
import Link from "next/link";

export default function Home() {
    return (
        <Layout>
            <section className="text-gray-600 body-font">
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <article className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">긍정적인 마인드로 개발하는 박대성입니다.
                        </h2>
                        <p className="mb-8 leading-relaxed">회피하기보단 마주하는 용기로, 힘들더라도 참고 견디는 근성으로 문제를 해결에 집중하고 목표로 향하겠습니다.</p>
                        <Link href="/projects" className="inline-flex text-white bg-stone-500 border-0 py-2 px-6 focus:outline-none hover:bg-stone-600 rounded text-lg">Projects &gt;</Link>
                    </article>
                    <article className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                        <img className="object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600" />
                    </article>
                </div>
            </section>
        </Layout>
    )
}