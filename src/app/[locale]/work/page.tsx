import { unstable_setRequestLocale } from "next-intl/server";

// components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "src/shared/ui/Accordion";
import { Paragraph, TypographyH2 } from "src/shared/ui/Typography/Typography";
import { Freelancing } from "./_components/freelancing";
import { RealSoft } from "./_components/realsoft";
import { TenTrucks } from "./_components/tentrucks";

export default function Page({ params }) {
  unstable_setRequestLocale(params.locale);

  return (
    <section>
      <TypographyH2>my work</TypographyH2>
      <div className="prose prose-neutral dark:prose-invert">
        <Paragraph>Here's a summary of my work so far.</Paragraph>
        <Accordion type="single" collapsible>
          <AccordionItem value="tentrucks">
            <AccordionTrigger>
              TenTrucks (Currently working here)
            </AccordionTrigger>
            <AccordionContent>
              <TenTrucks />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="realsoft">
            <AccordionTrigger>Realsoft</AccordionTrigger>
            <AccordionContent>
              <RealSoft />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <Accordion type="single" collapsible>
          <AccordionItem value="freelancing">
            <AccordionTrigger>Freelancing</AccordionTrigger>
            <AccordionContent>
              <Freelancing />
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
}
