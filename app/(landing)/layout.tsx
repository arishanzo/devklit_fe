import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";
import Header from "./components/layouts/header";
import Footer from "./components/layouts/footer";

const poppins = Poppins({
  variable: "--font-poppins",
   subsets: ["latin"], 
  display: "swap",
  weight: ["400", "500", "600", "700", "800" ]
});



export const metadata: Metadata = {
  title: "Devklit Tech | Software Development Company",
  icons: {
    icon: "/logo.png",
  },
  description:
    "Devklit Tech adalah perusahaan software development yang menyediakan layanan pembuatan website, aplikasi mobile, sistem custom, dan solusi teknologi untuk transformasi digital bisnis.",
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "custom software",
    "perusahaan teknologi",
    "jasa pembuatan aplikasi",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" >
      <body
        className={`${poppins.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer />
      </body>
    </html>
  );
}
