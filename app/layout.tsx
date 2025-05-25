import type { Metadata } from "next";
import { ClientLayout } from "./client-layout";
import "./globals.css";

export const metadata: Metadata = {
  title: "Shambhavi Singh | Software Engineer",
  description: "Software Engineer at Microsoft IDC",
  metadataBase: new URL("https://achyutkatiyar.com"),
  
  // Basic metadata
  applicationName: "Shambhavi Singh Portfolio",
  authors: [{ name: "Shambhavi Singh" }],
  keywords: ["Software Engineer","Full Stack Developer", "Machine Learning Engineer"],
  
  openGraph: {
    type: "website",
    url: "https://achyutkatiyar.com",
    title: "Shambhavi Singh | Full Stack Developer",
    description: "Software Engineer at Microsoft IDC, Full Stack Developer & ML Engineering Enthusiast.",
    siteName: "Shambhavi Singh",
    locale: "en_US",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shambhavi Singh - Portfolio",
      },
    ],
  },
  
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: { url: "/apple-touch-icon.png" },
  },
  
  alternates: {
    canonical: "https://achyutkatiyar.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}