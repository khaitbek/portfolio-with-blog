import { useLocale, useTranslations } from "next-intl";

// config
import { locales } from "src/shared/config/i18n/i18n";

// components
import LocaleSwitcherSelect from "./LocaleSwitcherSelect";

export function LocaleSwitcher() {
  const t = useTranslations("LocaleSwitcher");
  const locale = useLocale();
  return (
    <LocaleSwitcherSelect defaultValue={locale} label={t("label")}>
      {locales.map((cur) => (
        <option key={cur} value={cur}>
          {t("locale", { locale: cur })}
        </option>
      ))}
    </LocaleSwitcherSelect>
  );
}
