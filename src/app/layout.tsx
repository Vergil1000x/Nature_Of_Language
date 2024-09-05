import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SpeedInsights } from "@vercel/speed-insights/next"

export const metadata: Metadata = {
  title: {
    absolute: "",
    default: "Nature Of Language",
    template: "%s | Nature of Language",
  },
  description: "A brief experiment on elements of a language for efficient and fast learning a new one.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`scrollbar overflow-y-scroll overflow-x-hidden bg-neutral-100 scroll-smooth`}>
      <SpeedInsights/>
        <div className={`sticky top-0 h-0 z-20`}>
          <Header></Header>
        </div>
        {children}
        <div className={`absolute left-1/2 -translate-x-1/2 -translate-y-full w-full`}>
          <Footer></Footer>
        </div>
      </body>
    </html>
  );
}
