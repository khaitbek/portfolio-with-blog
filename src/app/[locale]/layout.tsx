import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// components
import { Navbar } from "../../components/nav";

// config
import { ThemeProvider } from "src/shared/config/theme/theme-provider";

// assets
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";

const cx = (...classes: string[]) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}) {
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
