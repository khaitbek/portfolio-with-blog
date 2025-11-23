import {
  Paragraph,
  TypographyH3,
  TypographyH4,
} from "src/shared/ui/Typography/Typography";

export function RealSoft() {
  return (
    <>
      <Paragraph className="text-neutral-600 dark:text-neutral-400 text-sm">
        Fullstack developer
      </Paragraph>
      <Paragraph>
        I joined{" "}
        <a href="https://realsoft.uz" target="_blank">
          Realsoft
        </a>{" "}
        on July 2023 as a fullstack developer. I have worked with the{" "}
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
              RealPay
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
              Expert.uz
            </a>
          </TypographyH4>
          <Paragraph>
            Working with the frontend team to make an all-in-one product that
            includes features from many popular platforms such as Upwork,
            Fiverr, Stackoverflow.
          </Paragraph>
        </li>
        <li>
          <TypographyH4>
            <a href="https://smart-office.uz" target="_blank">
              Smart Office (Desktop Client)
            </a>
          </TypographyH4>
          <Paragraph>
            Built a desktop app using{" "}
            <a href="https://tauri.app" target="_blank">
              Tauri
            </a>
          </Paragraph>
        </li>
      </ul>
    </>
  );
}
