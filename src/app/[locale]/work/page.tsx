import { unstable_setRequestLocale } from "next-intl/server";

// components
import {
  Paragraph,
  TypographyH2,
  TypographyH3,
  TypographyH4,
} from "src/shared/ui/Typography/Typography";

export default function Page({ params }) {
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
          on September 2023 as a fullstack developer. I have been working with
          the <strong>React.js</strong> and <strong>Vue.js</strong> teams to
          ship beatiful, robust and accessible user interfaces
        </Paragraph>
        <ul>
          <li>
            In September, I started my internship by helping the{" "}
            <a href="https://expert.uz" target="_blank">
              expert.uz
            </a>{" "}
            team to build the{" "}
            <a href="https://expert.uz/pages/community_catalog" target="_blank">
              <strong>community</strong>
            </a>{" "}
            module. I used tools like <strong>PostgreSQL</strong> and{" "}
            <strong>Vue.js</strong>
          </li>
          <li>
            In November, I was promoted to Junior fullstack developer at
            Realsoft and started working on the project called{" "}
            <a href="https://kh.smart-agro.uz/" target="_blank">
              Smart Agro
            </a>
            . My goal was to build an interactive map. I used the{" "}
            <a href="https://leafletjs.com/" target="_blank">
              <strong>Leaflet.js</strong>
            </a>
            library to build an awesome, accessible, very unique interactive map
          </li>
          <li>
            Starting January 2024, I joined the{" "}
            <a href="https://realpay.uz/" target="_blank">
              <strong>Realpay </strong>
            </a>
            team to help them build user interfaces for their payment system. I
            am collaborating with <strong>Java</strong> and{" "}
            <strong>React.js</strong> developers team
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
          managed to finish a few projects using technologies like{" "}
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
