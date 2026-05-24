import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Montserrat } from "next/font/google";



export const metadata: Metadata = {
  title: 'Decka Agency | High-Converting Websites for Local Businesses',
  description: 'Decka Agency builds modern, credibility-focused websites designed to convert local customers into loyal clients. Portfolio-first service agency.',
  openGraph: {
    "title": "Decka Agency - Local Service Website Design",
    "description": "Conversion-focused web design for service pros.",
    "siteName": "Decka Agency",
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Decka Agency - Modern Website Design",
    "description": "Websites that convert local customers."
  },
};

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});
const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${montserrat.variable} ${inter.variable} antialiased`}>
          
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
