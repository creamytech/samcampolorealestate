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
 * Renders BEFORE any JavaScript loads — pure HTML + CSS animations.
 * IntroProvider hides this via document.getElementById("ssr-splash").
 */
const SSR_LOADING_HTML = `
<style>
  @keyframes splashFadeIn { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
  @keyframes splashLineGrow { from { transform: scaleY(0); } to { transform: scaleY(1); } }
  @keyframes splashLineGrowX { from { transform: scaleX(0); } to { transform: scaleX(1); } }
  @keyframes splashRingPulse { 0%,100% { opacity: 0.3; transform: scale(1); } 50% { opacity: 0.7; transform: scale(1.05); } }
  @keyframes splashRingSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
  @keyframes splashProgress { from { transform: translateX(-100%); } to { transform: translateX(0%); } }
  @keyframes splashShimmer { from { transform: translateX(-200%); } to { transform: translateX(200%); } }
  @keyframes splashLetterIn { from { opacity: 0; transform: translateY(30px) rotateX(-40deg); } to { opacity: 1; transform: translateY(0) rotateX(0); } }
  @keyframes splashTagline { from { opacity: 0; letter-spacing: 1.2em; } to { opacity: 0.5; letter-spacing: 0.5em; } }
  @keyframes splashCorner { from { opacity: 0; } to { opacity: 0.15; } }
  @keyframes splashGlow { 0%,100% { box-shadow: 0 0 30px rgba(201,169,98,0.05); } 50% { box-shadow: 0 0 80px rgba(201,169,98,0.15); } }
  @keyframes splashDot { 0%,80%,100% { opacity: 0; } 40% { opacity: 1; } }
</style>
<div id="ssr-splash" style="position:fixed;inset:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:linear-gradient(145deg,#020202 0%,#0a0a0a 50%,#050505 100%);overflow:hidden">
  <!-- Corner frames -->
  <div style="position:absolute;top:24px;left:24px;width:60px;height:60px;border-top:1px solid #c9a962;border-left:1px solid #c9a962;animation:splashCorner 1.5s ease forwards;opacity:0"></div>
  <div style="position:absolute;top:24px;right:24px;width:60px;height:60px;border-top:1px solid #c9a962;border-right:1px solid #c9a962;animation:splashCorner 1.5s ease 0.1s forwards;opacity:0"></div>
  <div style="position:absolute;bottom:24px;left:24px;width:60px;height:60px;border-bottom:1px solid #c9a962;border-left:1px solid #c9a962;animation:splashCorner 1.5s ease 0.2s forwards;opacity:0"></div>
  <div style="position:absolute;bottom:24px;right:24px;width:60px;height:60px;border-bottom:1px solid #c9a962;border-right:1px solid #c9a962;animation:splashCorner 1.5s ease 0.3s forwards;opacity:0"></div>

  <!-- Ambient glow behind content -->
  <div style="position:absolute;width:400px;height:400px;border-radius:50%;background:radial-gradient(circle,rgba(201,169,98,0.06) 0%,transparent 70%);animation:splashGlow 3s ease-in-out infinite"></div>

  <!-- Main content -->
  <div style="text-align:center;position:relative;perspective:800px">
    <!-- Vertical gold accent line -->
    <div style="width:1px;height:80px;margin:0 auto 32px auto;transform-origin:top;animation:splashLineGrow 1.2s cubic-bezier(0.22,1,0.36,1) 0.2s both;background:linear-gradient(to bottom,transparent 0%,rgba(201,169,98,0.3) 30%,#c9a962 100%)"></div>

    <!-- Rotating ring emblem -->
    <div style="position:relative;width:100px;height:100px;margin:0 auto 32px auto">
      <svg width="100" height="100" viewBox="0 0 100 100" style="position:absolute;inset:0;animation:splashRingSpin 20s linear infinite">
        <circle cx="50" cy="50" r="46" fill="none" stroke="#c9a962" stroke-width="0.5" opacity="0.3" stroke-dasharray="4 6"/>
      </svg>
      <svg width="100" height="100" viewBox="0 0 100 100" style="position:absolute;inset:0;animation:splashRingPulse 3s ease-in-out infinite">
        <circle cx="50" cy="50" r="40" fill="none" stroke="#c9a962" stroke-width="0.8" opacity="0.5"/>
      </svg>
      <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;animation:splashFadeIn 1s ease 0.5s both">
        <span style="font-family:Georgia,Times,serif;font-size:28px;color:white;letter-spacing:3px;font-weight:300">SC</span>
      </div>
    </div>

    <!-- Name: letter-by-letter reveal -->
    <div style="margin-bottom:4px;overflow:hidden">
      <span style="display:inline-block;font-family:Georgia,Times,serif;font-size:48px;color:white;letter-spacing:0.25em;font-weight:300;animation:splashLetterIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.8s both">S</span><span style="display:inline-block;font-family:Georgia,Times,serif;font-size:48px;color:white;letter-spacing:0.25em;font-weight:300;animation:splashLetterIn 0.8s cubic-bezier(0.22,1,0.36,1) 0.9s both">A</span><span style="display:inline-block;font-family:Georgia,Times,serif;font-size:48px;color:white;letter-spacing:0.25em;font-weight:300;animation:splashLetterIn 0.8s cubic-bezier(0.22,1,0.36,1) 1.0s both">M</span>
    </div>
    <div style="margin-bottom:28px;overflow:hidden">
      <span style="display:inline-block;font-family:Georgia,Times,serif;font-size:56px;color:#c9a962;font-style:italic;font-weight:300;letter-spacing:0.06em;animation:splashLetterIn 0.8s cubic-bezier(0.22,1,0.36,1) 1.1s both">C</span><span style="display:inline-block;font-family:Georgia,Times,serif;font-size:56px;color:#c9a962;font-style:italic;font-weight:300;letter-spacing:0.06em;animation:splashLetterIn 0.8s cubic-bezier(0.22,1,0.36,1) 1.17s both">a</span><span style="display:inline-block;font-family:Georgia,Times,serif;font-size:56px;color:#c9a962;font-style:italic;font-weight:300;letter-spacing:0.06em;animation:splashLetterIn 0.8s cubic-bezier(0.22,1,0.36,1) 1.24s both">m</span><span style="display:inline-block;font-family:Georgia,Times,serif;font-size:56px;color:#c9a962;font-style:italic;font-weight:300;letter-spacing:0.06em;animation:splashLetterIn 0.8s cubic-bezier(0.22,1,0.36,1) 1.31s both">p</span><span style="display:inline-block;font-family:Georgia,Times,serif;font-size:56px;color:#c9a962;font-style:italic;font-weight:300;letter-spacing:0.06em;animation:splashLetterIn 0.8s cubic-bezier(0.22,1,0.36,1) 1.38s both">o</span><span style="display:inline-block;font-family:Georgia,Times,serif;font-size:56px;color:#c9a962;font-style:italic;font-weight:300;letter-spacing:0.06em;animation:splashLetterIn 0.8s cubic-bezier(0.22,1,0.36,1) 1.45s both">l</span><span style="display:inline-block;font-family:Georgia,Times,serif;font-size:56px;color:#c9a962;font-style:italic;font-weight:300;letter-spacing:0.06em;animation:splashLetterIn 0.8s cubic-bezier(0.22,1,0.36,1) 1.52s both">o</span>
    </div>

    <!-- Horizontal divider lines -->
    <div style="display:flex;align-items:center;justify-content:center;gap:16px;margin-bottom:20px">
      <div style="width:60px;height:1px;background:linear-gradient(to right,transparent,#c9a962);transform-origin:right;animation:splashLineGrowX 1s ease 1.6s both"></div>
      <div style="width:6px;height:6px;border:1px solid #c9a962;transform:rotate(45deg);animation:splashFadeIn 0.8s ease 1.8s both;opacity:0"></div>
      <div style="width:60px;height:1px;background:linear-gradient(to left,transparent,#c9a962);transform-origin:left;animation:splashLineGrowX 1s ease 1.6s both"></div>
    </div>

    <!-- Progress bar with shimmer -->
    <div style="width:220px;height:1px;background:rgba(255,255,255,0.06);margin:0 auto;overflow:hidden;border-radius:1px;animation:splashFadeIn 0.5s ease 2s both;opacity:0">
      <div style="width:100%;height:100%;background:linear-gradient(90deg,#c9a962,#e8d5a3,#c9a962);animation:splashProgress 3s cubic-bezier(0.45,0,0.15,1) 2.2s both"></div>
    </div>

    <!-- Tagline with tracking animation -->
    <div style="margin-top:24px;font-family:system-ui,-apple-system,sans-serif;font-size:11px;text-transform:uppercase;color:rgba(255,255,255,0.5);animation:splashTagline 2s ease 2s both;opacity:0">
      Luxury Real Estate
    </div>

    <!-- Loading dots -->
    <div style="margin-top:16px;display:flex;justify-content:center;gap:6px;animation:splashFadeIn 0.5s ease 2.5s both;opacity:0">
      <div style="width:3px;height:3px;border-radius:50%;background:#c9a962;animation:splashDot 1.5s ease-in-out 2.5s infinite"></div>
      <div style="width:3px;height:3px;border-radius:50%;background:#c9a962;animation:splashDot 1.5s ease-in-out 2.7s infinite"></div>
      <div style="width:3px;height:3px;border-radius:50%;background:#c9a962;animation:splashDot 1.5s ease-in-out 2.9s infinite"></div>
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
