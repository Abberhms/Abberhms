import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { JsonLd } from "@/components/json-ld";
import { siteConfig } from "@/config/site";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#090d16" },
  ],
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.name} | ${siteConfig.title}`,
    template: `%s | ${siteConfig.name}`,
  },
  description: `${siteConfig.name} - Software Engineer specializing in frontend web and mobile development (React.js, Next.js, React Native, TypeScript, Redux Toolkit). Based in ${siteConfig.location}.`,
  keywords: [
    "Sulaiman Abba Muhammad",
    "Software Engineer",
    "Frontend Developer",
    "React Developer",
    "Next.js Developer",
    "React Native Developer",
    "Mobile Developer",
    "Web Developer",
    "Software Engineer in Nigeria",
    "Kano Software Engineer",
    "TypeScript",
    "Redux Toolkit",
    "RTK Query",
  ],
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: siteConfig.url,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteConfig.url,
    title: `${siteConfig.name} | Software Engineer`,
    description:
      "Software Engineer specializing in responsive web and mobile applications with React.js, Next.js, React Native, TypeScript, and Redux Toolkit.",
    siteName: `${siteConfig.name} Portfolio`,
    images: [
      {
        url: `${siteConfig.url}/images/profile.svg`,
        width: 1200,
        height: 630,
        alt: `${siteConfig.name} - Software Engineer`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} | Software Engineer`,
    description:
      "Software Engineer specializing in frontend web and mobile development.",
    images: [`${siteConfig.url}/images/profile.svg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full">
        <ThemeProvider defaultTheme="system">
          <JsonLd />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
