import { Inter_Tight } from "next/font/google";
import "./globals.css";
import { HomeNavComp } from "@/components/nav";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "Dheer Tech Inc",
  description:
    "Dheer Tech Inc is a leading web development company specializing in creating secure, scalable, and smart web-based solutions for businesses of all sizes.",
  icons: {
    icon: "/assets/images/logo.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${interTight.variable} antialiased`}>
        <HomeNavComp />
        {children}
      </body>
    </html>
  );
}
