import type { Metadata } from "next";
import { unstable_setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

// components
import { ArticleView } from "src/widgets/ArticleView";

// api
import { getBlogPosts } from "src/shared/api/queries";

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  let post = getBlogPosts(params.locale).find(
    (post) => post.slug === params.slug
  );
  if (!post) {
    return;
  }

  let {
    title,
    publishedAt: publishedTime,
    summary: description,
    image,
  } = post.metadata;
  let ogImage = image
    ? `${process.env.BASE_URL}${image}`
    : `${process.env.BASE_URL}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      publishedTime,
      url: `${process.env.BASE_URL}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function Blog({ params }) {
  unstable_setRequestLocale(params.locale);
  const post = getBlogPosts(params.locale).find(
    (post) => post.slug === params.slug
  );

  if (!post) {
    notFound();
  }

  return <ArticleView locale={params.locale} slug={params.slug} />;
}
