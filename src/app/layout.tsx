import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { inter, instrumentSerif } from "@/lib/fonts";
import { siteConfig } from "@/lib/constants";
import "./globals.css";

const title = "Arktiv Media — Dvigubai daugiau užklausų per 90 dienų";
const description =
  "Sujungiame aukščiausio lygio dizainą, vietinį SEO ir automatizuotą atsiliepimų rinkimą į vieną sistemą, kuri paverčia jūsų svetainę klientų magnetu.";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title,
  description,
  applicationName: siteConfig.name,
  keywords: [
    "svetainių kūrimas",
    "vietinis SEO",
    "Google atsiliepimai",
    "Lietuva",
    "Vilnius",
    "skaitmeninė rinkodara",
    "konversinės svetainės",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "lt_LT",
    url: siteConfig.url,
    siteName: siteConfig.name,
    title,
    description,
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="lt"
      className={`${inter.variable} ${instrumentSerif.variable} antialiased`}
    >
      <body>
        {children}
        <SpeedInsights />
      </body>
    </html>
  );
}
