import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

// types
import { SandpackCSS } from "../../shared/ui/SandPackCss/SandPackCSS";

// components
import { Navbar } from "../../components/nav";

// assets
import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import "../../styles/globals.css";



const cx = (...classes) => classes.filter(Boolean).join(" ");

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(
        "text-black bg-white dark:text-white dark:bg-[#111010]",
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <head>
        <SandpackCSS />
      </head>
      <body className="antialiased max-w-2xl mb-40 flex flex-col md:flex-row mx-4 mt-8 lg:mx-auto">
        <main className="flex-auto min-w-0 mt-6 flex flex-col px-2 md:px-0">
          <Navbar />
          {children}
          <Analytics />
          <SpeedInsights />
        </main>
      </body>
    </html>
  );
}
