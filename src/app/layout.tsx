import "~/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Header from "~/components/Header";

export const metadata: Metadata = {
  title: "Coral Infantil de Setúbal",
  description: "Coral Infantil de Setúbal",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={GeistSans.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
