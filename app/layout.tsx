import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { generateOrganizationSchema } from "@/lib/schema";
import { NoiseOverlay } from "@/components/ui/noise-overlay";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "ODO | Agence de Publicité à la Performance",
  description: "Agence experte en Google Ads, Meta Ads et TikTok Ads. Maximisez votre ROI avec nos stratégies d'acquisition payante.",
  metadataBase: new URL("https://odo.fr"),
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://odo.fr",
    title: "ODO | Agence de Publicité à la Performance",
    description: "Agence experte en Google Ads, Meta Ads et TikTok Ads. Maximisez votre ROI.",
    siteName: "ODO",
  },
  twitter: {
    card: "summary_large_image",
    title: "ODO | Agence de Publicité à la Performance",
    description: "Agence experte en Google Ads, Meta Ads et TikTok Ads.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schema = generateOrganizationSchema();

  return (
    <html lang="fr">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased flex flex-col",
          inter.variable,
          poppins.variable
        )}
      >
        <NoiseOverlay />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
