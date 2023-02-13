import Image from "next/image";

export default function ProjectItem({ data }: any) {
    const title = data.properties.Title.title[0].plain_text;
    const description = data.properties.Description.rich_text[0].plain_text;
    const github = data.properties.Github.url;
    const tags = data.properties.Tags.multi_select;
    const imgSrc = data.cover.external.url;
    const period = data.properties.WorkPeriod.date;

    //작업기간 계산 함수 인자 : 시작기간, 종료기간
    const calculationDate = (start: any, end: any): number => {
        //문자열 쪼개기
        const startDateSplit = start.split('-');
        const endDateSplit = end.split('-');
        // console.log(startDateSplit, endDateSplit);

        const startDate = new Date();
        const endDate = new Date();

        startDate.setFullYear(startDateSplit[0])
        startDate.setMonth(startDateSplit[1] - 1)
        startDate.setDate(startDateSplit[2])
        endDate.setFullYear(endDateSplit[0])
        endDate.setMonth(endDateSplit[1] - 1)
        endDate.setDate(endDateSplit[2])
        // console.log(startDate, endDate)

        // startDate.setMonth(startDateSplit[1] - 1)
        // endDate.setMonth(endDateSplit[1] - 1)
        // if (startDate.getMonth() > endDate.getMonth()) {
        //     startDate.setFullYear(startDateSplit[0])
        // }else if (startDate.getMonth() === endDate.getMonth() && startDate.getDate())
        // console.log(startDate, endDate)

        //날짜를 숫자로 변환. abs() : 절대값으로
        const difference = Math.abs(Number(endDate) - Number(startDate));
        // console.log(difference, startDate, endDate);

        // 1000밀리세컨 60세컨 60미닛 60아워 24데이
        return (difference / (1000 * 60 * 60 * 24))
    }

    return (
        <article className="my-5 p-4 text-left w-full">
            <div className="mx-auto rounded-lg overflow-hidden">
                <Image className="w-full sm:max-h-[433px] object-cover hover:scale-110"
                    alt="cover image"
                    src={imgSrc}
                    width="1080"
                    height="750"
                    quality={100}
                />
            </div>
            <h3 className="mt-8 font-semibold text-lg text-slate-700">{title}</h3>
            <div className="lg:pl-4 pr-2">
                <p className="my-4 text-slate-600">{description}</p>
                <a className="my-4 text-neutral-400 hover:text-neutral-500" href={github} target="_blank">
                    <i className="xi-github xi-x" />
                    View Code
                </a>
                <div className="tags my-4 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-4 text-center text-sm box-border">{tags.map((aTags: any) => (
                    <span key={aTags.id} className={aTags.color}>{aTags.name}</span>
                ))}
                </div>
                <h4 className="text-right mb-5 text-neutral-400 text-sm">{period.start} ~ {period.end} &#40;{calculationDate(period.start, period.end) + 1}일&#41;</h4>
            </div>
        </article>
    )
}