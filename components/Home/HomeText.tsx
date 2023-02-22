import Link from "next/link";
export default function HomeText() {
    return (
        <article className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h2 className="title-font sm:text-4xl text-3xl mb-6 font-medium text-neutral-800">긍정적이고 개방적인 문제해결사
            </h2>
            <p className="mb-9 leading-relaxed text-neutral-600">
                여러 사람들과 함께 문제를 해결하가는 과정을 즐깁니다.<br />
                각자의 방식대로 각자의 생각을 나누다보면,<br />
                매우 다양하고 흥미로운 아이디어들을 발견합니다.<br />
                이것을 구체화시키고 적용하며 문제를 해결할 때<br />
                '또 경험하고 싶다', '다른 방법은 없을까?' 등<br />
                성취감과 동기부여가 생깁니다.
            </p>
            <Link href="/projects" className="inline-flex text-green-100 text-base bg-neutral-400 border-0 py-2 px-6 focus:outline-none hover:bg-neutral-500 rounded">View Projects &gt;</Link>
        </article>
    );
}