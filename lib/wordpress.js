export async function getPosts() {
  const endpoint = `https://dev-cf-graphql.pantheonsite.io/wp-json/wp/v2/posts`;
  const res = await fetch(endpoint);
  return await res.json();
}

export async function getPost(slug) {
  const endpoint = `https://dev-cf-graphql.pantheonsite.io/wp-json/wp/v2/posts?slug=${slug}&limit=1`;
  const res = await fetch(endpoint);
  const posts = await res.json();
  return posts[0];
}

export async function getPage(slug) {
  const endpoint = `https://dev-cf-graphql.pantheonsite.io/wp-json/wp/v2/pages?slug=${slug}&limit=1`;
  const res = await fetch(endpoint);
  const posts = await res.json();
  return posts[0];
}
