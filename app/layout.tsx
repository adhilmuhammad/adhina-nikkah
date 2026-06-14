import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://adhina-nikkah-invitation.vercel.app"),

  title: "Adhina & Shaz Nikkah",

  description:
    "Together with their families, you are invited to the Nikkah of Adhina & Shaz. 22 June 2026 • 10:30 AM • Al Saj Amaranta, Trivandrum",

  openGraph: {
    title: "Adhina & Shaz Nikkah",
    description:
      "22 June 2026 • 10:30 AM • Al Saj Amaranta, Trivandrum",
    url: "https://adhina-nikkah-invitation.vercel.app",
    siteName: "Nikkah Invitation",

    images: [
      {
        url: "https://adhina-nikkah-invitation.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Adhina & Shaz",
      },
    ],

    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Adhina & Shaz Nikkah",
    description:
      "22 June 2026 • 10:30 AM • Al Saj Amaranta, Trivandrum",

    images: [
      "https://adhina-nikkah-invitation.vercel.app/og-image.png",
    ],
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      </body>
    </html>
  );
}