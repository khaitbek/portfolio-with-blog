import {unstable_setRequestLocale} from "next-intl/server";

// components
import {
  Paragraph,
  TypographyH2,
  TypographyH3,
  TypographyH4,
} from "src/shared/ui/Typography/Typography";

export default function Page({params}) {
  unstable_setRequestLocale(params.locale);

  return (
    <section>
      <TypographyH2>my work</TypographyH2>
      <div className="prose prose-neutral dark:prose-invert">
        <Paragraph>
          On my way to make people's life easier with love, here's a summary of
          my work so far.
        </Paragraph>
        <hr className="my-6 border-neutral-100 dark:border-neutral-800" />
        <TypographyH3 className="font-medium text-xl mb-1 tracking-tighter">
          Realsoft
        </TypographyH3>
        <Paragraph className="text-neutral-600 dark:text-neutral-400 text-sm">
          Fullstack developer
        </Paragraph>
        <Paragraph>
          I joined{" "}
          <a href="https://realsoft.uz" target="_blank">
            Realsoft
          </a>{" "}
          on July 2023 as a fullstack developer. I have been working with the{" "}
          <strong>React.js</strong> and <strong>Vue.js</strong> teams to develop
          cross-functional, robust, performant web applications
        </Paragraph>
        <ul>
          <li>
            Helped the frontend teams develop robust web applications using
            React.js, Vue.js
          </li>
          <li>
            Optimized project performances by applying complex code-splitting
            strategies
          </li>
          <li>
            Created internal reusable packages, libraries & ui kits for managing
            reusable code
          </li>
          <li>
            Used modular-monolithic architectural methodology called{" "}
            <a target="_blank" href="https://feature-sliced.design">
              FSD
            </a>
          </li>
          <li>
            Worked with monorepositories using Turborepo, Docker, Github, Gitlab
          </li>
        </ul>
        <hr />
        <TypographyH3 className="font-medium text-xl mb-1 tracking-tighter">
          Projects
        </TypographyH3>
        <ul>
          <li>
            <TypographyH4>
              <a href="https://realpay.uz" target="_blank">
                RealPay (2023 - Present)
              </a>
            </TypographyH4>
            <Paragraph>
              Working with the frontend team to develop cross-functional user
              interfaces for an internal payment system called RealPay.
            </Paragraph>
          </li>
          <li>
            <TypographyH4>
              <a href="https://new.expert.uz" target="_blank">
                Expert.uz (2023 - Present)
              </a>
            </TypographyH4>
            <Paragraph>
              Working with the frontend team to make an all-in-one product that
              includes features from many popular platforms such as Upwork,
              Fiverr, Stackoverflow.
            </Paragraph>
          </li>
        </ul>
        <hr />
        <TypographyH3>freelancing</TypographyH3>

        <Paragraph>
          Besides working at{" "}
          <a href="https://realsoft.uz" target="_blank">
            Realsoft
          </a>
          , I actively spend my time <strong>freelancing</strong>. I have
          managed to work on projects using technologies like{" "}
          <strong>React.js</strong> and <strong>Next.js</strong> for clients
          from <strong>Uzbekistan</strong>
        </Paragraph>
        <ul>
          <li>
            <TypographyH4>
              <a href="https://isnur.uz" target="_blank">
                Isnur.uz
              </a>
            </TypographyH4>
            <Paragraph>
              I helped the{" "}
              <strong>
                <a href="https://isnur.uz" target="_blank">
                  Isnur.uz
                </a>
              </strong>{" "}
              company to showcase their products by building an e-commerce
              website. I helped the frontend dev of the company by building a
              backend using <strong>Express.js</strong> and integrating with it
              using <strong>HTML</strong>, <strong>CSS</strong> and{" "}
              <strong>Javascript</strong>
            </Paragraph>
          </li>
          <li>
            <TypographyH4>
              <a href="https://www.elitegroup.uz" target="_blank">
                ELITE GROUP
              </a>
            </TypographyH4>
            <Paragraph>
              I helped the{" "}
              <strong>
                <a href="https://www.elitegroup.uz" target="_blank">
                  ELITE GROUP
                </a>
              </strong>{" "}
              company to showcase their products by building an e-commerce
              website. I built an e-commerce website using{" "}
              <strong>Next.js</strong> and <strong>Sanity.io</strong>
            </Paragraph>
          </li>
        </ul>
      </div>
    </section>
  );
}
