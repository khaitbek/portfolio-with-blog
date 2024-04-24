import { unstable_setRequestLocale } from "next-intl/server";

// components
import { ArticleView } from "src/widgets/ArticleView";
import { BlogModal } from "./modal";

export default function Blog({ params }) {
  unstable_setRequestLocale(params.locale);
  return (
    <BlogModal>
      <ArticleView locale={params.locale} slug={params.slug} />
    </BlogModal>
  );
}
