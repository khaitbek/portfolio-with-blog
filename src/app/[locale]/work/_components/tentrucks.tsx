import { Paragraph } from "src/shared/ui/Typography/Typography";

export function TenTrucks() {
  return (
    <>
      <Paragraph className="text-neutral-600 dark:text-neutral-400 text-sm">
        Frontend developer
      </Paragraph>
      <Paragraph>
        I joined{" "}
        <a href="https://tentrucks.com" target="_blank">
          TenTrucks
        </a>{" "}
        on September 2025 as a frontend developer. I am participating in the
        development of a Transportation Management Software.
      </Paragraph>
    </>
  );
}
