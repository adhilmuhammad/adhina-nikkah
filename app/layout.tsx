import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "The Nikkah of Adhina & Shaz",
  description:
    "Together with their families, you are invited to the Nikkah of Adhina & Shaz. 22 June 2026 • 10:30 AM • Al Saj Amaranta, Trivandrum",

  openGraph: {
    title: "The Nikkah of Adhina & Shaz",
    description:
      "22 June 2026 • 10:30 AM • Al Saj Amaranta, Trivandrum",
    url: "https://adhina-nikkah-invitation.vercel.app",
    siteName: "Nikkah Invitation",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
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