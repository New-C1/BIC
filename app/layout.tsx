import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
const inter = Inter({ subsets: ["latin"] });
import Footer from "./components/Footer";
export const metadata: Metadata = {
  title: "smilescansolution",
  
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
      
        <link
          href="https://fonts.googleapis.com/css2?family=League+Spartan:wght@400;600&display=swap"
          rel="stylesheet"
        />

        <title>{metadata.title as string}</title>
      </head>
      <body className="font-inter">
        <Navbar />
        {children}

        <Footer/>
     
  <script type="text/javascript" id="hs-script-loader" async defer src="//js-eu1.hs-scripts.com/143890688.js"></script>

      </body>
    </html>
  );
}
