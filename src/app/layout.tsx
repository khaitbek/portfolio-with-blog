import { Metadata } from "next";

// assets
import "./global.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.BASE_URL!),
  title: {
    default: "Hayitbek Yusupov",
    template: "%s | Hayitbek Yusupov",
  },
  description: "Developer, writer, and creator.",
  openGraph: {
    title: "Hayitbek Yusupov",
    description: "Developer, writer, and creator.",
    url: process.env.BASE_URL,
    siteName: "Hayitbek Yusupov",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "Hayitbek Yusupov",
    card: "summary_large_image",
  },
  verification: {
    google: "eZSdmzAXlLkKhNJzfgwDqWORghxnJ8qR9_CHdAh5-xw",
    yandex: "14d2e73487fa6c71",
  },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
