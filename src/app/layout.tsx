import type { Metadata } from "next";
import "./globals.css";
import StoreProvider from "./StoreProvider";
import { Open_Sans } from "next/font/google";
import Header from "@/components/Header";

const open_sans = Open_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mapty",
  description: "Created to map and record your workouts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.0.1/dist/leaflet.css"
        />
      </head>
      <body className={open_sans.className}>
        <div id="modal"></div>
        <StoreProvider>
          <div className="main-container">
            <Header />
            {children}
          </div>
        </StoreProvider>
      </body>
    </html>
  );
}
