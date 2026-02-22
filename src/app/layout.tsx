import type { Metadata } from "next";
import "./globals.css";
import LuxuryNav from "@/components/LuxuryNav";
import { IntroProvider } from "@/components/IntroProvider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  metadataBase: new URL("https://samcampolorealestate.com"),
  title: {
    default: "Sam Campolo | Westchester Luxury Real Estate | Compass",
    template: "%s | Sam Campolo Real Estate",
  },
  description:
    "Your trusted partner for luxury real estate in Westchester County. Exceptional service, local expertise, and a personalized approach to finding your dream home.",
  keywords: [
    "Westchester real estate",
    "luxury homes",
    "Compass",
    "Sam Campolo",
    "Westchester County",
    "New York real estate",
    "Scarsdale homes",
    "Bronxville real estate",
    "Rye NY homes for sale",
    "luxury homes Westchester",
    "Fairfield County real estate",
  ],
  openGraph: {
    title: "Sam Campolo | Westchester Luxury Real Estate",
    description:
      "Your trusted partner for luxury real estate in Westchester County. $12M+ in annual sales. Top 1.5% nationally.",
    type: "website",
    siteName: "Sam Campolo Real Estate",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam Campolo | Westchester Luxury Real Estate",
    description:
      "Your trusted partner for luxury real estate in Westchester County.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://samcampolorealestate.com",
  },
};

import LuxuryFooter from "@/components/LuxuryFooter";

/**
 * Server-rendered loading screen HTML.
 * This renders BEFORE any JavaScript loads, so the user
 * sees the branded splash instead of a black screen.
 * The IntroProvider client component will hide this via
 * document.getElementById and take over.
 */
const SSR_LOADING_HTML = `
<div id="ssr-splash" style="position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:#030303">
  <div style="text-align:center">
    <div style="width:1px;height:100px;background:linear-gradient(to bottom,transparent,#c9a962);margin:0 auto 36px auto"></div>
    <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" style="display:block;margin:0 auto 24px auto">
      <rect x="2" y="2" width="96" height="96" rx="4" stroke="#c9a962" stroke-width="1.5" opacity="0.5"/>
      <text x="50" y="60" text-anchor="middle" font-family="Georgia,Times,serif" font-size="40" font-weight="400" fill="white" letter-spacing="4">SC</text>
    </svg>
    <div style="color:white;font-size:42px;font-family:Georgia,Times,serif;font-weight:400;letter-spacing:0.2em;text-transform:uppercase;margin-bottom:6px">SAM</div>
    <div style="color:#c9a962;font-size:48px;font-family:Georgia,Times,serif;font-weight:400;font-style:italic;letter-spacing:0.08em;margin-bottom:32px">Campolo</div>
    <div style="width:200px;height:2px;background:rgba(255,255,255,0.1);margin:0 auto;overflow:hidden;border-radius:1px">
      <div style="width:100%;height:100%;background:linear-gradient(90deg,#c9a962,#e8d5a3);animation:ssrSlide 2.5s ease-in-out 0.5s forwards;transform:translateX(-100%)"></div>
    </div>
    <div style="color:rgba(255,255,255,0.4);font-size:12px;text-transform:uppercase;letter-spacing:0.5em;margin-top:28px;font-family:system-ui,-apple-system,sans-serif">Luxury Real Estate</div>
  </div>
</div>
<style>@keyframes ssrSlide{to{transform:translateX(100%)}}</style>
`;

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const hasSeenIntro = cookieStore.has("hasSeenIntro");

  return (
    <html lang="en">
      <body>
        {/* Server-rendered splash — visible BEFORE JS loads */}
        {!hasSeenIntro && (
          <div dangerouslySetInnerHTML={{ __html: SSR_LOADING_HTML }} />
        )}
        <IntroProvider initialHasSeen={hasSeenIntro}>
          <ScrollToTop />
          <LuxuryNav />
          {children}
          <LuxuryFooter />
        </IntroProvider>
      </body>
    </html>
  );
}
