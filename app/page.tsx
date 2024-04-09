// utils
import { PreloadResources } from "./preload";

// components
import Image from "next/image";
import Link from "next/link";
import { ArrowIcon } from "./shared/ui/ArrowIcon/ArrowIcon";
import { BlogLink } from "./shared/ui/BlogLink/BlogLink";

// assets
import devfest from "public/images/me_at_dev_fest.jpg";
import hackathon from "public/images/me_at_najot_talim_hackathon.jpg";
import bismillah from "public/images/me_at_najottalim.jpg";
import realsoft from "public/images/me_at_realsoft.jpg";
import school from "public/images/me_at_school.jpg";
import bootcamp from "public/images/me_finishing_najot_talim_bootcamp_course.jpg";
import notion from "public/images/notion.png";
import pnpmLogo from "public/images/pnpm_logo.png";
import vsCode from "public/images/vscode.svg";
import nextjs from "public/next-logo.svg";

export default function Page() {
  return (
    <section>
      <PreloadResources />
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        hey, I'm Hayitbek 👋
      </h1>
      <p className="prose prose-neutral dark:prose-invert">
        {`I'm a fullstack developer, optimist, and community builder. I currently `}
        <Link href="/work">work</Link>
        {` as a Fullstack Developer at `}
        <span className="not-prose">
          <Badge href="https://realsoft.uz">Realsoft</Badge>
        </span>
        {`, where I am helping them to build robust web applications using `}
        <Badge href="https://react.dev">
          <svg
            width="14"
            height="14"
            role="img"
            aria-label="React logo"
            className="!mr-1"
          >
            <use href="/sprite.svg#react" />
          </svg>
          React
        </Badge>
        .
      </p>
      <div className="columns-2 sm:columns-3 gap-4 my-8">
        <div className="relative h-40 mb-4">
          <Image
            alt="Always start with bismillash"
            src={bismillah}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80 mb-4 sm:mb-0">
          <Image
            alt="Me and my team winning a hackathon at Najot Ta'lim"
            src={hackathon}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-[-16px] sm:object-center"
          />
        </div>
        <div className="relative h-40 sm:h-80 sm:mb-4">
          <Image
            alt="Me standing on stage at devfest delivering the keynote"
            src={devfest}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover object-top sm:object-center"
          />
        </div>
        <div className="relative h-40 mb-4 sm:mb-0">
          <Image
            alt="Me graduating frontend bootcamp course at Najot Ta'lim"
            src={bootcamp}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-40 mb-4">
          <Image
            alt="I currently work at Realsoft"
            src={realsoft}
            fill
            sizes="(max-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
        <div className="relative h-80">
          <Image
            alt="Me graduating school"
            src={school}
            fill
            sizes="(min-width: 768px) 213px, 33vw"
            priority
            className="rounded-lg object-cover"
          />
        </div>
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>
          Over the the last 2 years, I've written content on my blog. I try to
          write articles about latest technologies, things that are a bit tough
          to grasp and useful tips/tricks on web development, especially on
          <Badge className="ml-2">Javascript</Badge>,{" "}
          <Badge className="ml-2">Typescript</Badge>
          and
          <Badge className="ml-2"> React </Badge>,
        </p>
      </div>
      <div className="my-8 flex flex-col space-y-4 w-full">
        <BlogLink name="Tanstack Router" slug="tanstack-router" />
        <BlogLink
          name="Typescriptni o'rganishingiz kerakmi?"
          slug="should-you-learn-typescript"
        />
        <BlogLink name="Modern CSS" slug="modern-css-2023" />
      </div>
      <div className="prose prose-neutral dark:prose-invert">
        <p>I am in love with using these tools on a daily basis</p>
      </div>
      <div className="my-8 flex flex-row space-x-2 w-full h-14 overflow-x-auto">
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <a href="https://supabase.com">
            <Image
              width="30"
              height="30"
              role="img"
              src={nextjs}
              alt="Next.js logo"
            />
          </a>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <a href="https://tanstack.com">
            <span
              className="
            inline-block text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-yellow-500
            underline 
            "
            >
              TanStack
            </span>
          </a>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-center px-3 py-4">
          <a className="flex items-center gap-2" href="https://vercel.com">
            <svg
              width="19"
              height="19"
              className="mb-0"
              role="img"
              aria-label="Vercel logo"
            >
              <use
                height={19}
                className="h-full mt-2"
                href="/sprite.svg#vercel"
              />
            </svg>
            Vercel
          </a>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-center px-3 py-4">
          <a
            className="flex items-center gap-2"
            href="https://code.visualstudio.com/"
          >
            <Image
              width="30"
              height="30"
              role="img"
              src={vsCode}
              alt="VS Code logo"
            />
          </a>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <a href="https://supabase.com">
            <svg width="19" height="19" role="img" aria-label="Supabase logo">
              <use href="/sprite.svg#supabase" />
            </svg>
          </a>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-between px-3 py-4">
          <a href="https://pnpm.io">
            <Image width={60} height={60} alt="PNPM logo" src={pnpmLogo} />
          </a>
        </div>
        <div className="border border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800 rounded flex items-center justify-center px-3 py-4">
          <a className="flex items-center gap-2" href="https://notion.so">
            <Image
              width="30"
              height="30"
              role="img"
              src={notion}
              alt="Notion logo"
            />
          </a>
        </div>
      </div>
      <ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-19 transition-all"
            rel="noopener noreferrer"
            target="_blank"
            href="https://twitter.com/HayitbekD"
          >
            <ArrowIcon />
            <p className="h-7 ml-2">follow me</p>
          </a>
        </li>
      </ul>
    </section>
  );
}

function Badge(props) {
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
