import "~/styles/globals.css";
import "~/styles/fonts.scss";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Header from "~/components/Header";
import localFont from "next/font/local";

const monotypeCorsiva = localFont({
  src: "../../public/fonts/monotype-corsiva.ttf",
  variable: "--font-monotype-corsiva",
});

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
      <body className={`${GeistSans.className} ${monotypeCorsiva.variable}`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
