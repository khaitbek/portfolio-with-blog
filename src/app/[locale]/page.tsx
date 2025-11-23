import { useTranslations } from "next-intl";

// utils
import { PreloadResources } from "../preload";

// components
import Image from "next/image";
import { Link } from "../../shared/config/i18n/navigation";
import { ArrowIcon } from "../../shared/ui/ArrowIcon/ArrowIcon";
import { BlogLink } from "../../shared/ui/BlogLink/BlogLink";

// types
import { ComponentPropsWithoutRef } from "react";

// assets
import { unstable_setRequestLocale } from "next-intl/server";

export default function Page({ params }) {
  unstable_setRequestLocale(params.locale);

  const t = useTranslations("Index");
  return (
    <section>
      <PreloadResources />
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        hey, I'm Hayitbek 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a fullstack developer. I currently `}
        <Link href="/work">work</Link>
        {` as a Frontend developer at `}
        <span className="not-prose">
          <Badge href="https://tentrucks.com">TenTrucks</Badge>
        </span>
        {`where I am helping them to build web applications using `}
        <Badge href="https://react.dev">React</Badge>
        and
        <Badge href="https://vuejs.org">Vue</Badge>.
      </p>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Ranting is my hobby. Whenever I feel mad about something, I try to
          express my anger using my words. I write articles mostly about
          frontend development
        </p>
      </div>
      <ul className="my-8 flex flex-col space-y-4 w-full">
        <BlogLink name="Tanstack Router" slug="tanstack-router" />
        <BlogLink
          name="TypeScript is not just a superset of JS, it is more than that"
          slug="typescript-is-not-just-a-superset-of-javascript-it-is-more-than-that"
        />
        <BlogLink
          name="Should you learn TypeScript?"
          slug="should-you-learn-typescript"
        />
        <BlogLink name="Modern CSS" slug="modern-css-2023" />
      </ul>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-19 transition-all"
            rel="noopener noreferrer"
            href="https://twitter.com/HayitbekD"
            target="_blank"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">follow me</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

function Badge(props: ComponentPropsWithoutRef<"a">) {
  return (
    <a
      {...props}
      target="_blank"
      className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded p-1 text-sm inline-flex items-center leading-4 text-neutral-900 dark:text-white dark:text-neutral-19 no-underline"
    />
  );
}

function ChannelLink({ img, link, name }) {
  return (
    <div className="group flex w-full">
      <a
        href={link}
        target="_blank"
        className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4 w-full"
      >
        <div className="flex items-center space-x-3">
          <div className="relative h-16">
            <Image
              alt={name}
              src={img}
              height={64}
              width={64}
              sizes="33vw"
              className="border border-neutral-200 dark:border-neutral-700 rounded-full h-16 w-16"
              priority
            />
            <div className="border border-neutral-200 dark:border-neutral-700 rounded-full bg-white inline-flex p-1 relative h-6 w-6 items-center -top-6 -right-10">
              <svg width="15" height="11" role="img" aria-label="YouTube logo">
                <use href="/sprite.svg#youtube" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col">
            <p className="font-medium text-neutral-900 dark:text-neutral-19">
              {name}
            </p>
          </div>
        </div>
        <div className="text-neutral-700 dark:text-neutral-300 transform transition-transform duration-300 group-hover:-rotate-12">
          <ArrowIcon />
        </div>
      </a>
    </div>
  );
}
