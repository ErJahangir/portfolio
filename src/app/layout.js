import { Open_Sans, Syne } from "next/font/google";
import "./globals.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ScrollToTop from "./Component/ScrollTop";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

export const metadata = {
  title: "Jahangir Alam | React Native Developer Portfolio",
  description:
    "Professional portfolio of Jahangir Alam, a specialized React Native Developer with expertise in mobile payments and scalable applications.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${openSans.variable} ${syne.variable} scroll-smooth`}
    >
      <body className={openSans.className}>
        <Navigation />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
