import {getPage, getPost} from '../lib/wordpress';
import Link from 'flareact/link';


export async function getEdgeProps({ params }) {
    const { slug } = params;

    const post = await getPage(slug);

    return {
        props: {
            post,
        },
        // Revalidate every 8 hours
        //revalidate: 60 * 60 * 8,
    };
}

export default function Page({ post }) {
    return (
        <div className="container">
            <strong>Page.js</strong>
            <h1>{post.title.rendered}</h1>
            <div
                className="body"
                dangerouslySetInnerHTML={{ __html: post.content.rendered }}
            />
        </div>
    );
}
