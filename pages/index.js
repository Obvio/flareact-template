import { getPosts } from '../lib/wordpress';
import Link from 'flareact/link';
import Head from 'flareact/head';

export async function getEdgeProps() {
  const posts = await getPosts();

  return {
    props: {
      posts,
    },
    // Revalidate every 8 hours
    //revalidate: 1, //60 * 60 * 8,
  };
}

export default function Index({ posts = [] }) {
  return (
    <div className="container">
      <Head>
        <title>My page title XXX</title>
      </Head>
      <h1>WordPress, Powered by Flareact</h1>
      <div className="posts">
        {posts.map(post => {
          return (
            <div key={post.id} className="post">
              <Link href="/blog/[slug]" as={`/${post.slug}`}>
                <a>{post.title.rendered}</a>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}
