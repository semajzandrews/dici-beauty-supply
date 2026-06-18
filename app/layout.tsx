import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dici Beauty Supply · Apothecary beauty counter on Main St, Orange NJ",
  description:
    "A hand-stocked neighborhood beauty supply on Main Street in the City of Orange, NJ. Cosmetics, skincare, hair, fragrance, and tools, picked shelf by shelf. Open six days. Call (973) 677-3331.",
  openGraph: {
    title: "Dici Beauty Supply · Orange NJ",
    description:
      "The apothecary-style beauty counter on Main St. Cosmetics, skincare, hair and tools, picked by hand.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="paper-grain min-h-screen antialiased">{children}</body>
    </html>
  );
}
