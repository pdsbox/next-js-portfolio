import Image from "next/image";

export default function ProjectItem({ data }: any) {
    const title = data.properties.Title.title[0].plain_text;
    const description = data.properties.Description.rich_text[0].plain_text;
    const github = data.properties.Github.url;
    const tags = data.properties.Tags.multi_select;
    const imgSrc = data.cover.external.url;
    const period = data.properties.WorkPeriod.date;

    return (
        <article className="my-5 p-4 text-left w-full">
            <div className="mx-auto">
                <Image className="w-full sm:max-h-[433px] object-cover rounded-lg"
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
                <a className="my-4 text-neutral-400 hover:text-neutral-500" href={github} target="_blank">View Code</a>
                <div className="tags my-4 grid grid-cols-4 sm:grid-cols-4 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-3 2xl:grid-cols-4 text-center text-sm box-border">{tags.map((aTags: any) => (
                    <span key={aTags.id} className={aTags.color}>{aTags.name}</span>
                ))}
                </div>
                <h4 className="text-right mb-5 text-neutral-400 text-sm">{period.start} ~ {period.end}</h4>
            </div>
        </article>
    )
}