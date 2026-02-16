import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-lato",
});

export const metadata: Metadata = {
  title: "Care Ayurveda Clinic | Ayurvedic Center in Indore",
  description:
    "Get expert Ayurvedic treatment for piles, fistula, spine issues, infertility & more at Care Ayurveda – trusted holistic care in Hapur, India.",
  keywords: [
    "Ayurveda",
    "Ayurvedic treatment",
    "Care",
    "Indore",
    "holistic healing",
    "piles treatment",
    "fistula",
    "spine treatment",
    "infertility",
  ],
  icons: {
    icon: "https://ext.same-assets.com/1201089955/1818423414.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={lato.variable}>
      <body className="antialiased font-sans">{children}</body>
    </html>
  );
}
