import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Paul Debevec | Full-Stack Engineer",
  description:
    "Portfolio of Paul Debevec, a full-stack software engineer with strong backend experience building reliable, production-ready systems across multiple stacks.",
  keywords: [
    "Paul Debevec",
    "software engineer",
    "full-stack engineer",
    "backend engineer",
    "Ruby on Rails",
    "Python",
    "Golang",
    "Next.js",
    "portfolio",
  ],
  authors: [{ name: "Paul Debevec" }],
  creator: "Paul Debevec",
  metadataBase: new URL("https://pauldebevec.dev"),
  openGraph: {
    title: "Paul Debevec | Full-Stack Engineer",
    description:
      "Portfolio of Paul Debevec, a full-stack software engineer with strong backend experience building reliable, production-ready systems across multiple stacks.",
    url: "https://pauldebevec.dev",
    siteName: "Paul Debevec Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Paul Debevec portfolio preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Paul Debevec | Full-Stack Engineer",
    description:
      "Portfolio of Paul Debevec, a full-stack software engineer with strong backend experience building reliable, production-ready systems across multiple stacks.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}