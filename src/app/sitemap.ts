import { getBlogPosts } from "src/shared/api/queries";

export default async function sitemap() {
  let blogs = getBlogPosts().map((post) => ({
    url: `${process.env.BASE_URL}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  let routes = ["", "/blog", "/guestbook", "/uses", "/work"].map((route) => ({
    url: `${process.env.BASE_URL}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
