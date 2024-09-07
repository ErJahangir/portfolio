import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./Navigation";
import Footer from "./Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "This is My Portfolio",
  description: "This is my professional porfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
