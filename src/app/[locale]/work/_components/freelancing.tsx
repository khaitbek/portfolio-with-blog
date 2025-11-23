import { Paragraph, TypographyH4 } from "src/shared/ui/Typography/Typography";

export function Freelancing() {
  return (
    <>
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
    </>
  );
}
