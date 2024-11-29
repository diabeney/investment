import type { Metadata } from "next";
import { Work_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "./(landing)/_components/navbar";
import Footer from "./(landing)/_components/footer";
import FirstFooter from "./(landing)/_components/first_footer";
import { Toaster } from "sonner";
const WorkSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-paragraph",
});

const BricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "BlackCrest Investment Solutions",
  description:
    "BlackCrest offers expertly curated investment opportunities tailored to meet your financial goals. From real estate to microfinance, our solutions ensure steady income and long-term growth.",
  category: "Investment Services",
  applicationName: "BlackCrest",
  metadataBase: new URL("https://blackcrest.com"),
  creator: "BlackCrest",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    countryName: "Ghana",
    title: "BlackCrest - Expert Investment Opportunities",
    url: "https://blackcrest.com",
    description:
      "Explore curated investment options at BlackCrest. With expertise in real estate, microfinance, and acquisitions, we guide you to financial success.",
    emails: ["info@blackcrest.com"],
    siteName: "BlackCrest",
    type: "website",
    images: [
      {
        url: "https://blackcrest.com/meta-image1.png",
        alt: "BlackCrest Investment Opportunities",
      },
      {
        url: "https://blackcrest.com/meta-image2.png",
        alt: "BlackCrest Financial Growth",
      },
    ],
  },
  twitter: {
    creator: "@BlackCrestInvest",
    description:
      "BlackCrest specializes in curated investment options for financial growth. Achieve steady income and long-term success with our expert solutions.",
    title: "BlackCrest - Expert Investment Opportunities",
    site: "@BlackCrestInvest",
    card: "summary_large_image",
    images: [
      {
        url: "https://blackcrest.com/meta-image1.png",
        alt: "BlackCrest Investment Opportunities",
      },
      {
        url: "https://blackcrest.com/meta-image2.png",
        alt: "BlackCrest Financial Growth",
      },
    ],
  },
  keywords: [
    "Investment Opportunities",
    "Real Estate Investments",
    "Microfinance Solutions",
    "Business Acquisitions",
    "Financial Growth",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${WorkSans.variable} ${BricolageGrotesque.variable} bg-black text-white  antialiased`}
      >
        <Toaster richColors position="top-right" closeButton />
        <Navbar />
        {children}
        {/* <FirstFooter /> */}
        <Footer />
      </body>
    </html>
  );
}
