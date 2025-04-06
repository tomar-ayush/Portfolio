import "./globals.css";
import Footer from "@/components/ui/Footer";
import Providers from "./providers";
import RollingIcons from "@/components/ui/RollingIcons";
import AnimateEnter from "@/components/ui/AnimateEnter";
import Script from "next/script";

export const metadata = {
  title: { default: "Ayush" },
  metadataBase: new URL("https://ayushtomar.tech"),
  creator: "Ayush Pratap Singh",
  publisher: "Ayush Pratap Singh",
  description:
    "I'm Ayush Pratap Singh , a web developer and cybersecurity enthusiast",
  keywords: [
    "Ayush Pratap Singh",
    "Ayush Tomar",
    "Web Developer",
  ],
  authors: [{ name: "Ayush Pratap Singh", url: "https://ayushtomar.tech" }],
  openGraph: {
    title: "Ayush Pratap Singh",
    description:
      "I'm  Ayush, a web developer and cybersecurity enthusiast",
    url: "https://ayushtomar.tech",
    siteName: "Ayush Tomar",
    images: [
      {
        url: "https://ayushtomar.tech/og.png",
        width: 1200,
        height: 678,
        alt: "",
      },
    ],
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ayush Tomar",
    description:
      "I'm Ayush Pratap Singh, full stack web developer programming ideas into reality.",
    siteId: "ayushtomar",
    creator: "ayush",
    creatorId: "ayushtomar",
    images: {
      url: "https://ayushtomar.tech/og.png",
      alt: "",
    },
  },

  alternates: {
    canonical: "https://ayushtomar.tech",
  },
  category: "technology",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>

        <script defer src="https://cloud.umami.is/script.js" data-website-id="928d7257-0d8c-4850-8b7a-c19a84966efe"></script>
      </head>
      <link rel="shortcut icon" href="/images/profile.jpg" />
      <body className="bg-dark dark:bg-slate-950">
        <Providers>
          <AnimateEnter>
            <>
              <nav className="fixed bottom-4 left-2 z-50 sm:left-4 md:left-6">
                <RollingIcons />
              </nav>
              {children}
              <Footer />
            </>
          </AnimateEnter>
        </Providers>
      </body>
    </html>
  );
}
