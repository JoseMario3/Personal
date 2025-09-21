import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import styles from "@/styles/components.module.css";
import Navbar from "@/components/Navbar.js";
import Footer from "@/components/Footer.js";
import { Toolbar } from "@mui/material";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Website!",
  icons: { icon: "/TripleG.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={styles.container}>
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
