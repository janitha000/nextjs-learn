import Link from "next/link"
import FirstPost from "../../components/posts/post-view"

const postList = [
    { id: 1, title: "This is title 1" },
    { id: 2, title: "This is title 2" }
]

export async function getStaticProps() {
    return {
        props: { posts: postList }
    }
}

const Posts = ({ posts }) => {
    return (
        <>
            {posts && posts.map((post) => (
                <FirstPost post={post} />
            ))}

            <h3>
                <Link href={"/"}>
                    Home
                </Link>
            </h3>
        </>

    )
}

export default Posts