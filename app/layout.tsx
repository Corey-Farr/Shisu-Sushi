import type { Metadata } from "next";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.seo.home.title,
  description: site.seo.home.description,
  metadataBase:
    typeof process.env.NEXT_PUBLIC_SITE_URL === "string"
      ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
      : undefined,
  openGraph: {
    title: site.seo.home.title,
    description: site.seo.home.description
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-shisu-black text-shisu-ivory">
        <div className="min-h-screen bg-gradient-to-b from-shisu-black via-shisu-charcoal to-black text-shisu-ivory">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

