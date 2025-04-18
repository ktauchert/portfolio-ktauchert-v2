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
  title: "KTauchert-Dev",
  description: "Generated by create next app",
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
        <header className="fixed top-4 left-0 right-0 z-50 h-max-20 max-w-[1280px] mx-auto px-2 lg:px-0">
          <NavbarMain />
        </header>
        <main className=" sm:mt-[110px] md:mt-0 ">{children}</main>
        <footer>
          <FooterMain />
        </footer>
      </body>
    </html>
  );
}
