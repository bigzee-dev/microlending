import type { Metadata } from "next";
import { Montserrat, DM_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "MicroLending — Fair credit, made in Gaborone.",
  description:
    "Short-term loans from P500 to P15,000, paid out within the hour. Built in Botswana for Batswana. No paperwork, no queues, no surprises.",
  keywords: [
    "micro loans Botswana",
    "personal loans Gaborone",
    "fast cash Botswana",
    "online loans Botswana",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${montserrat.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
      style={{
        colorScheme: "light",
      }}
    >
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
