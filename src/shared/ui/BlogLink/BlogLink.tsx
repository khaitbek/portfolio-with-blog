import { Link } from "../../config/i18n/navigation";

// assets
import { ArrowIcon } from "../ArrowIcon/ArrowIcon";

export const BlogLink = ({ slug, name }: { slug: string; name: string }) => {
  return (
    <li className="group">
      <Link
        href={`/blog/${slug}`}
        className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
      >
        <div className="flex flex-col">
          <p className="font-medium text-neutral-900 dark:text-white">{name}</p>
        </div>
        <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
          <ArrowIcon />
        </div>
      </Link>
    </li>
  );
};
