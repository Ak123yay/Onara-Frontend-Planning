import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Onara — your Google listing, turned into a real website",
  description:
    "Type your business name. Watch ten agents read your reviews, photos, hours and menu — and build you a custom site in 90 seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
