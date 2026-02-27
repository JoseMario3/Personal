import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import styles from "@/styles/components.module.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toolbar } from "@mui/material";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import "@/styles/globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "My Website!",
  icons: { icon: "/Logo/JF.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${styles.container} ${inter.className}`}>
        {/* Allows interaction between Next.js & mui */}
        <AppRouterCacheProvider>
          <Navbar />
          <Toolbar /> {/* Used for spacing with Navbar */}
          <main className={styles.content}>{children}</main>
          <Footer />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
