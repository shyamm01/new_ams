import { Inter } from "next/font/google";
import "./globals.css";
// import "bootstrap/dist/css/bootstrap.min.css";
import { Toaster } from "sonner";

const inter = Inter({ subsets: ["latin"] });

import { Metadata } from "next";
import BoostrapClient from "@/components/BoostrapClient/BoostrapClient";
import UserLayout from "@/components/Layouts/UserLayout";
import { auth } from "@/auth";
import "@/components/ui/icons/Icons";

export const metadata = {
  title: {
    template: "%s | AMS Dashboard",
    default: "AMS Dashboard",
  },
  description: "The official Next.js Learn Dashboard built with App Router.",
  metadataBase: new URL("https://next-learn-dashboard.vercel.sh"),
};

export default function RootLayout({ children }) {
  // const session = await auth();

  return (
    <html
      lang="en"
      className="chrome windows fontawesome-i2svg-active fontawesome-i2svg-complete"
    >
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              var CONFIG = {
                isNavbarVerticalCollapsed: false,
                theme: 'light',
                isRTL: false,
                isFluid: false,
                navbarStyle: 'transparent',
                navbarPosition: 'vertical'
              };
              Object.keys(CONFIG).forEach(function (key) {
                if (localStorage.getItem(key) === null) {
                  localStorage.setItem(key, CONFIG[key]);
                }
              });
              if (JSON.parse(localStorage.getItem('isNavbarVerticalCollapsed'))) {
                document.documentElement.classList.add('navbar-vertical-collapsed');
              }
              if (localStorage.getItem('theme') === 'dark') {
                document.documentElement.setAttribute('data-bs-theme', 'dark');
              } else if (localStorage.getItem('theme') === 'auto') {
                document.documentElement.setAttribute('data-bs-theme', window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
              }
            `,
          }}
        />
      </head>
      <body className={inter.className}>
        {/* {session?.user ? <UserLayout>{children}</UserLayout> : children} */}
        <UserLayout>{children}</UserLayout>
        <Toaster position="top-center" />
        <BoostrapClient />
      </body>
    </html>
  );
}
