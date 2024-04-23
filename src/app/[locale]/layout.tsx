import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { unstable_setRequestLocale } from "next-intl/server";

// components
import { Navbar } from "../../components/nav";

// config
import { locales } from "src/shared/config/i18n/i18n";
import { ThemeProvider } from "src/shared/config/theme/theme-provider";

// assets
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
  unstable_setRequestLocale(params.locale);
  return (
    <html
      lang={params.locale}
      className={cx(
        "bg-background text-foreground",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex-auto container pb-6 max-w-xl min-w-0 mt-6 flex flex-col px-2 md:px-0">
            <Navbar />
            {children}
            <Analytics />
            <SpeedInsights />
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
