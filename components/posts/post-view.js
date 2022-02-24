import Link from "next/link";
import Layout from "../layout/layout";

export default function PostView({ post }) {
    const postId = 1;
    return (<Layout>
        <h1>This is post view page</h1>
        {post && <h2>Title {post.title}</h2>}
        <Link href={`/posts/${postId}`}>View post</Link>
    </Layout>)
}