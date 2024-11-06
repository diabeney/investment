import type { Metadata } from "next";
import { Work_Sans, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Navbar from "./(landing)/_components/navbar";
import Footer from "./(landing)/_components/footer";
import FirstFooter from "./(landing)/_components/first_footer";
import { Toaster } from 'sonner'
const WorkSans = Work_Sans({
  subsets: ["latin"],
  variable: "--font-paragraph",
});

const BricolageGrotesque = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Blackcrest investment",
  description:
    "Blackcrest specializes in creating tailored software solutions for non-technical clients. Our expertise transforms your vision into reality. Contact us today!",
  category: "website",
  applicationName: "Blackcrest",
  metadataBase: new URL("https://Blackcrest.com"),
  creator: "Blackcrest",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    countryName: "Ghana",
    title: "Blackcrest - Custom Software Solutions for Non-Technical Clients",
    url: "https://Blackcrest.com",
    description:
      "Blackcrest specializes in creating tailored software solutions for non-technical clients. Our expertise transforms your vision into reality. Contact us today!",
    emails: ["Blackcrest@gmail.com"],
    siteName: "Blackcrest",
    type: "website",
    images: [
      {
        url: `https://Blackcrest.vercel.app/meta.png`,
        alt: "Blackcrest",
      },
      {
        url: `https://Blackcrest.com/meta.png`,
        alt: "Blackcrest",
      },
      {
        url: `https://www.Blackcrest.com/meta.png`,
        alt: "Blackcrest",
      },
    ],
  },
  twitter: {
    creator: "Blackcrest",
    description:
      "Blackcrest specializes in creating tailored software solutions for non-technical clients. Our expertise transforms your vision into reality. Contact us today!",
    title: "Blackcrest - Custom Software Solutions for Non-Technical Clients",
    site: "https://Blackcrest.com",
    card: "summary_large_image",
    images: [
      {
        url: `https://Blackcrest.vercel.app/meta.png`,
        alt: "Blackcrest",
      },
      {
        url: `https://Blackcrest.com/meta.png`,
        alt: "Blackcrest",
      },
      {
        url: `https://www.Blackcrest.com/meta.png`,
        alt: "Blackcrest",
      },
    ],
  },
  keywords: ["Investment Funds"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${WorkSans.variable} ${BricolageGrotesque.variable}  antialiased`}
      >
        <Toaster richColors position="top-right" closeButton />
        <Navbar />
        {children}
        <FirstFooter />
        <Footer />
      </body>
    </html>
  );
}
