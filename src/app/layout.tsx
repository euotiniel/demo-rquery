import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@/services/queryClient";
import { ViewTransitions } from 'next-view-transitions'

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://demo-rquery.vercel.app/"),
  title: { default: "demo", template: "" },
  description: "just testing",
  openGraph: {
    title: "demo",
    description: "just testing",
    url: "https://demo-rquery.vercel.app/",
    siteName: "demo",
    locale: "en_US",
    type: "website",
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
  twitter: {
    title: "demo",
    card: "summary_large_image",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions> 
    <html lang="en">
      <body className={inter.className}>
        <QueryClientProvider client={queryClient}>
        {children}
        </QueryClientProvider>
        </body>
    </html>
    </ViewTransitions>
  );
}
