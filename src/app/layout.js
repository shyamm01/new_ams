import { Inter } from "next/font/google";
import "./globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

import { Metadata } from "next";
import BoostrapClient from "@/components/BoostrapClient/BoostrapClient";

export const metadata = {
  title: {
    template: "%s | AMS Dashboard",
    default: "AMS Dashboard",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Toaster position="top-center"/>
        <BoostrapClient/>
      </body>
    </html>
  );
}
