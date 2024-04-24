import { notFound } from "next/navigation";
import { Suspense } from "react";

// components
import { CustomMDX } from "src/components/mdx";
import { TypographyH2 } from "src/shared/ui/Typography/Typography";

// api
import { getBlogPosts } from "src/shared/api/queries";

// utils
import { formatDate } from "src/shared/lib/dateFormatter";

export function ArticleView({
  slug,
  locale,
}: {
  slug: string;
  locale: "uz" | "en";
}) {
  const post = getBlogPosts(locale).find((post) => post.slug === slug);

  if (!post) {
    notFound();
  }
  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.metadata.title,
            datePublished: post.metadata.publishedAt,
            dateModified: post.metadata.publishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${process.env.BASE_URL}${post.metadata.image}`
              : `${process.env.BASE_URL}/og?title=${post.metadata.title}`,
            url: `${process.env.BASE_URL}/blog/${post.slug}`,
            author: {
              "@type": "Person",
              name: "Hayitbek Yusupov",
              url: "https://khaitbek.vercel.app",
              location: "Tashkent, Uzbekistan",
            },
          }),
        }}
      />
      <TypographyH2>{post.metadata.title}</TypographyH2>
      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <Suspense fallback={<p className="h-5" />}>
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {formatDate(post.metadata.publishedAt)}
          </p>
        </Suspense>
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}
