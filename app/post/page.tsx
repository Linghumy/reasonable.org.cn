import Section, {Container} from "@/app/ui/container";
import Image from "next/image";

export const metadata = {
    title: "团队成员"
}

function Card({title, post_time}: { title: string, post_time: number }) {
    return (
        // <div className="items-center space-x-1 text-left rounded-full bg-secondary dark:bg-secondary-dark">
        //     <div className="flex items-center">
        //         <Image
        //             className="rounded-full dark:brightness-90"
        //             src={`https://q1.qlogo.cn/g?b=qq&nk=${qq}&s=640`}
        //             width={50}
        //             height={50}
        //             alt=""
        //         />
        //         <div className="mx-auto">
        //             <p className="text-lg text-title dark:text-content-dark font-bold">{nick}</p>
        //         </div>
        //     </div>
        // </div>
        null
    );
}

export default function Posts() {
    const posts = [
        {title: '', post_time: 1765035944},
    ]
    return (
        <Section className="text-center">
            <Container>
                <p>文章列表</p>
                <div className="mt-4 relative grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                    {/* 原代码传入的是 qq 属性，与 Card 定义的 post_time 不匹配，已修正为 post_time */}
                    {posts.map((post, index) => <Card key={index} title={post.title} post_time={post.post_time}/>)}
                </div>
            </Container>
        </Section>
    )
}
