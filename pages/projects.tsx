import Layout from "@/components/Layout"
import { TOKEN, DATABASE_ID } from '../config/index'
import ProjectItem from '../components/projects/item';

export default function Projects({ projectDatas }: any) {
    return (
        <Layout>
            <h2 className="text-center text-4xl mt-10 mb-5"><span className="text-purple-500">{projectDatas.results.length}</span> Projects</h2>

            <section className="grid grid-cols-1 gap-1 mx-auto p-2 md:grid-cols-2 xl:grid-cols-3 xl:w-11/12 2xl:w-11/12" >
                {projectDatas.results.map((aProject: any) => (
                    <ProjectItem key={aProject.id} data={aProject} />
                ))}
            </section>
        </Layout>
    )
}

// 빌드 타임에 호출 - 서버에서 처리
export async function getStaticProps() {
    const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'Notion-Version': '2022-06-28',
            'content-type': 'application/json',
            Authorization: `Bearer ${TOKEN}`
        },
        body: JSON.stringify({
            sorts: [
                {
                    "property": "Title",
                    "direction": "descending"
                }
            ]
            , page_size: 100
        })
    };

    const res = await fetch(`https://api.notion.com/v1/databases/${DATABASE_ID}/query`, options);

    const projectDatas = await res.json();

    return {
        props: { projectDatas }, // will be passed to the page component as props
    }
}