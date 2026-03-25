import { Outfit } from "next/font/google";
import "./globals.css";
import Navigation from "./Navigation";
import Footer from "./Footer";
import ScrollToTop from "./Component/ScrollTop";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Jahangir Alam | React Native Developer Portfolio",
  description:
    "Professional portfolio of Jahangir Alam, a specialized React Native Developer with expertise in mobile payments and scalable applications.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${outfit.variable} scroll-smooth`}>
      <body className={outfit.className}>
        <Navigation />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
