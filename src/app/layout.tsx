
import type { Metadata } from "next";
import "@fontsource/plus-jakarta-sans/400.css";
import "@fontsource/plus-jakarta-sans/500.css";
import "@fontsource/plus-jakarta-sans/600.css";
import "@fontsource/plus-jakarta-sans/700.css";
import "@fontsource/plus-jakarta-sans/800.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@/styles/globals.css";
import { siteConfig } from "@/content/siteConfig";

export const metadata: Metadata = {
  title: "Mindra Labs Academy | Learn to Code. Explore AI. Create the Future.",
  description: siteConfig.description,
  keywords: [
    "coding academy for kids",
    "children AI learning",
    "Nigeria tech education",
    "scratch programming",
    "python for teens",
    "web development for children",
    "Mindra Labs Academy",
  ],
  openGraph: {
    title: "Mindra Labs Academy",
    description: siteConfig.description,
    type: "website",
    locale: "en_NG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="font-sans text-slate-800 bg-white antialiased selection:bg-brand-orange selection:text-white">
        {children}
      </body>
    </html>
  );
}
