// app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ImageFix – Free AI Image Tools",
  description:
    "ImageFix.co offers free AI tools like background remover, upscaler, uncrop, cleanup, and text remover. Fix and enhance your images instantly online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-gray-900">
        <header className="">
          <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-bold text-lg">
              <img src="logo-black.png" alt="ImageFix Logo" width={130} height={40} />
            </Link>
            <div className="flex gap-4 text-sm">
              <Link href="/bg-remover">Background Remover</Link>
              <Link href="/upscale">Upscale</Link>
              <Link href="/uncrop">Uncrop</Link>
              <Link href="/cleanup">Cleanup</Link>
              <Link href="/remove-text">Remove Text</Link>
              <Link href="/replace-background">Replace BG</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer className=" mt-8">
          <div className="max-w-6xl mx-auto px-4 py-6 text-xs text-gray-500 flex flex-wrap gap-4 justify-between">
            <span>© {new Date().getFullYear()} ImageFix.co</span>
            <div className="flex gap-3">
              <Link href="/privacy-policy">Privacy</Link>
              <Link href="/terms">Terms</Link>
              <Link href="/contact">Contact</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
