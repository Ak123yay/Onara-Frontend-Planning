import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Onara | Websites from your Google Business Profile",
  description:
    "Onara turns a Google Business Profile into a complete, deployable website in 90 seconds.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
