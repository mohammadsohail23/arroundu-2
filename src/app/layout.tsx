// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import SiteNavbar from "../components/SiteNavbar";
import SiteFooter from "../components/SiteFooter";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AroundU",
  description: "Discover what's around you.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      {/* Flex column so footer sticks to bottom on short pages */}
      <body className={`${inter.className} bg-neutral-950 text-neutral-100 min-h-screen flex flex-col`}>
        {/* Global navbar */}
        <SiteNavbar />

        {/* Main content area (pushed below fixed navbar) */}
        <main className="pt-20 flex-1">
          {/* Site-wide container: centered, responsive side padding */}
          <div className="mx-auto max-w-screen-2xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>

        {/* Global footer */}
        <SiteFooter />
      </body>
    </html>
  );
}
