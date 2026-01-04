import type { Metadata } from "next";
import "./globals.css";
import { Josefin_Sans, Nunito } from "next/font/google";
import NavbarMain from "@/components/navbar/NavbarMain";
import FooterMain from "@/components/footer/FooterMain";

const nunito = Nunito({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"],
});

const josefinSans = Josefin_Sans({
  variable: "--font-josefin-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Karsten Tauchert - Fullstack Developer | Elevate Your Digital Experience",
  description:
    "Explore the portfolio of Karsten Tauchert, a skilled Fullstack Developer with expertise in AI, web development, and creative projects. Discover how to optimize your next digital venture!",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title:
      "Karsten Tauchert - Fullstack Developer | Elevate Your Digital Experience",
    description:
      "Explore the portfolio of Karsten Tauchert, a skilled Fullstack Developer with expertise in AI, web development, and creative projects. Discover how to optimize your next digital venture!",
    url: "https://ktauchert.de",
    siteName: "Karsten Tauchert",
    images: [
      {
        url: "https://cdn.sanity.io/images/5tnrep1i/production/d83538d6531375ca80081677d1019b883af943b3-1024x1024.png",
        width: 1024,
        height: 1024,
        alt: "Karsten Tauchert - Fullstack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Karsten Tauchert - Fullstack Developer | Elevate Your Digital Experience",
    description:
      "Explore the portfolio of Karsten Tauchert, a skilled Fullstack Developer with expertise in AI, web development, and creative projects. Discover how to optimize your next digital venture!",
    creator: "@ktauchert",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${josefinSans.variable} ${nunito.variable} antialiased `}
      >
        <NavbarMain />

        <main className=" sm:mt-[110px] md:mt-0 ">{children}</main>
        <footer>
          <FooterMain />
        </footer>
      </body>
    </html>
  );
}
