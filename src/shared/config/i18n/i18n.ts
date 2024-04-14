import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

// Can be imported from a shared config
export const locales = ["en", "uz"] as const;

export default getRequestConfig(async ({ locale }) => {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(locale as any)) notFound();
  console.log({ locale, filename: `../../../../messages/${locale}.json` });
  const file = await import(`../../../../messages/${locale}.json`);
  console.log({ file: file.default });
  return {
    messages: (
      await (locale === "en"
        ? // When using Turbopack, this will enable HMR for `en`
          import("../../../../messages/en.json")
        : import(`../../../../messages/uz.json`))
    ).default,
  };
});
