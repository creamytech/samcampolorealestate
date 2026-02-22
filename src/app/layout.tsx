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
 * Ultra-premium server-rendered loading screen.
 * ALL content is visible by default via inline styles.
 * CSS animations are decorative only — never for visibility.
 */
const SSR_LOADING_HTML = `
<style>
  @keyframes ssrSpin { to { transform: rotate(360deg); } }
  @keyframes ssrPulse { 0%,100% { opacity: 0.4; } 50% { opacity: 0.8; } }
  @keyframes ssrProgress { from { transform: translateX(-100%); } to { transform: translateX(0%); } }
  @keyframes ssrGlow { 0%,100% { opacity: 0.04; } 50% { opacity: 0.12; } }
  @keyframes ssrDot { 0%,80%,100% { opacity: 0.2; } 40% { opacity: 1; } }
</style>
<div id="ssr-splash" style="position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:#050505;overflow:hidden">
  <!-- Corner frames — always visible at low opacity -->
  <div style="position:absolute;top:24px;left:24px;width:60px;height:60px;border-top:1px solid rgba(201,169,98,0.2);border-left:1px solid rgba(201,169,98,0.2)"></div>
  <div style="position:absolute;top:24px;right:24px;width:60px;height:60px;border-top:1px solid rgba(201,169,98,0.2);border-right:1px solid rgba(201,169,98,0.2)"></div>
  <div style="position:absolute;bottom:24px;left:24px;width:60px;height:60px;border-bottom:1px solid rgba(201,169,98,0.2);border-left:1px solid rgba(201,169,98,0.2)"></div>
  <div style="position:absolute;bottom:24px;right:24px;width:60px;height:60px;border-bottom:1px solid rgba(201,169,98,0.2);border-right:1px solid rgba(201,169,98,0.2)"></div>

  <!-- Ambient glow -->
  <div style="position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(201,169,98,0.06) 0%,transparent 70%);animation:ssrGlow 3s ease-in-out infinite"></div>

  <!-- Main content — ALL VISIBLE BY DEFAULT -->
  <div style="text-align:center;position:relative">
    <!-- Vertical gold accent line -->
    <div style="width:1px;height:80px;margin:0 auto 32px auto;background:linear-gradient(to bottom,transparent 0%,rgba(201,169,98,0.3) 30%,#c9a962 100%)"></div>

    <!-- Emblem ring -->
    <div style="position:relative;width:100px;height:100px;margin:0 auto 32px auto">
      <svg width="100" height="100" viewBox="0 0 100 100" style="position:absolute;inset:0;animation:ssrSpin 20s linear infinite">
        <circle cx="50" cy="50" r="46" fill="none" stroke="#c9a962" stroke-width="0.5" opacity="0.3" stroke-dasharray="4 6"/>
      </svg>
      <svg width="100" height="100" viewBox="0 0 100 100" style="position:absolute;inset:0;animation:ssrPulse 3s ease-in-out infinite">
        <circle cx="50" cy="50" r="40" fill="none" stroke="#c9a962" stroke-width="0.8"/>
      </svg>
      <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center">
        <span style="font-family:Georgia,Times New Roman,serif;font-size:28px;color:white;letter-spacing:3px;font-weight:300">SC</span>
      </div>
    </div>

    <!-- Sam -->
    <div style="color:white;font-size:48px;font-family:Georgia,Times New Roman,serif;font-weight:300;letter-spacing:0.25em;margin-bottom:4px">SAM</div>

    <!-- Campolo -->
    <div style="color:#c9a962;font-size:56px;font-family:Georgia,Times New Roman,serif;font-weight:300;font-style:italic;letter-spacing:0.06em;margin-bottom:28px">Campolo</div>

    <!-- Divider -->
    <div style="display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:20px">
      <div style="width:60px;height:1px;background:linear-gradient(to right,transparent,#c9a962)"></div>
      <div style="width:6px;height:6px;border:1px solid #c9a962;transform:rotate(45deg)"></div>
      <div style="width:60px;height:1px;background:linear-gradient(to left,transparent,#c9a962)"></div>
    </div>

    <!-- Progress bar -->
    <div style="width:220px;height:1px;background:rgba(255,255,255,0.06);margin:0 auto;overflow:hidden;border-radius:1px">
      <div style="width:100%;height:100%;background:linear-gradient(90deg,#c9a962,#e8d5a3,#c9a962);animation:ssrProgress 3s cubic-bezier(0.45,0,0.15,1) 0.5s both"></div>
    </div>

    <!-- Tagline -->
    <div style="margin-top:24px;font-family:system-ui,-apple-system,sans-serif;font-size:11px;text-transform:uppercase;letter-spacing:0.5em;color:rgba(255,255,255,0.4)">Luxury Real Estate</div>

    <!-- Loading dots -->
    <div style="margin-top:16px;display:flex;justify-content:center;gap:6px">
      <div style="width:3px;height:3px;border-radius:50%;background:#c9a962;animation:ssrDot 1.5s ease-in-out infinite"></div>
      <div style="width:3px;height:3px;border-radius:50%;background:#c9a962;animation:ssrDot 1.5s ease-in-out 0.2s infinite"></div>
      <div style="width:3px;height:3px;border-radius:50%;background:#c9a962;animation:ssrDot 1.5s ease-in-out 0.4s infinite"></div>
    </div>
  </div>
</div>
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
