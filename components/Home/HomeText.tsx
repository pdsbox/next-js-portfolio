import Link from "next/link";
export default function HomeText() {
    return (
        <article className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-neutral-800">긍정적인 마인드로 개발하는 박대성입니다.
            </h2>
            <p className="mb-9 leading-relaxed text-neutral-600">회피하기보단 마주하는 용기로.<br />
                힘들더라도 참고 견디는 근성으로.<br />
                문제 해결에 집중하며 목표를 달성하겠습니다.</p>
            <Link href="/projects" className="inline-flex text-green-100 text-base bg-neutral-400 border-0 py-2 px-6 focus:outline-none hover:bg-neutral-500 rounded">Welcome &gt;</Link>
        </article>
    );
}