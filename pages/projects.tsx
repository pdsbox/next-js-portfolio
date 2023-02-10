import Layout from "@/components/Layout"
import { TOKEN, DATABASE_ID } from '../config/index'

export default function Projects() {
    return (
        <Layout>
            <h2>프로젝트 페이지</h2>
        </Layout>
    )
}

// 빌드 타임에 호출 - 서버쪽 처리
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

    const projectNames = await res.json();

    const projectID = projectNames.results.map((aProject: any) => (
        // aProject.properties.Github.url
        aProject.properties.Title.title[0].plain_text
    ))
    console.log(`projectID : ${projectID}`);

    return {
        props: {}, // will be passed to the page component as props
    }
}