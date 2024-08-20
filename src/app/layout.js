import { Inter } from "next/font/google";
import "./globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

import { Metadata } from "next";
import BoostrapClient from "@/components/BoostrapClient/BoostrapClient";
import UserLayout from "@/components/Layouts/UserLayout";
import { auth } from "@/auth";

export const metadata = {
  title: {
    template: "%s | AMS Dashboard",
    default: "AMS Dashboard",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default async function RootLayout({ children }) {
  const session = await auth();



  return (
    <html lang="en">
      <body className={inter.className}>
        {session?.user ? <UserLayout>{children}</UserLayout> : children}
        <Toaster position="top-center" />
        <BoostrapClient />
      </body>
    </html>
  );
}
