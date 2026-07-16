import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const ibmPlexMono = IBM_Plex_Mono({
  variable: "--font-ibm-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ai-training-plan-reimagined.vercel.app"),
  title: "AI Training Plan | Training That Adapts",
  description:
    "Adaptive AI coaching that turns your workouts, recovery, schedule, and goals into one plan that stays current.",
  openGraph: {
    title: "AI Training Plan | Training That Adapts",
    description:
      "One adaptive plan built from your workouts, recovery, schedule, and goals.",
    images: ["/images/endurance-dawn.webp"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${manrope.variable} ${ibmPlexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
