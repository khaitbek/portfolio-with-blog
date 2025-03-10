import { unstable_setRequestLocale } from "next-intl/server";

// components
import { BlogLink } from "src/shared/ui/BlogLink/BlogLink";

// api
import { getBlogPosts } from "src/shared/api/queries";

// metadata
export const metadata = {
  title: "Blog",
  description:
    "Read my thoughts on software development, project management and more.",
};

export default function BlogPage({ params }: { params: { locale: string } }) {
  unstable_setRequestLocale(params.locale);

  const allBlogs = getBlogPosts(params.locale as any);

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        read my blog
      </h1>
      <ul className="space-y-4 max-h-[60vh] overflow-y-auto">
        {allBlogs
          .sort((a, b) => {
            if (
              new Date(a.metadata.publishedAt) >
              new Date(b.metadata.publishedAt)
            ) {
              return -1;
            }
            return 1;
          })
          .map((post) => (
            <BlogLink
              name={post.metadata.title}
              slug={post.slug}
              key={post.slug}
            />
          ))}
      </ul>
    </section>
  );
}
