import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter } from "next/font/google";
import "@/styles/globals.css";
import { siteConfig } from "@/content/siteConfig";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-jakarta",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

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
    <html lang="en" className={`${jakarta.variable} ${inter.variable}`}>
      <body className="font-sans text-slate-800 bg-white antialiased selection:bg-brand-orange selection:text-white">
        {children}
      </body>
    </html>
  );
}

