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
  title: "Devklit Tech",
  description: "Devklit adalah perusahaan teknologi untuk pengembangan aplikasi",
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
       
        {children}
       
      </body>
    </html>
  );
}
