import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Devklit Tech | JASA PEMBUATAN WEBSITE LAMONGAN",
    template: "%s | Devklit Tech",
  },
  description:
    "Devklit Tech adalah perusahaan software development yang menyediakan layanan pembuatan website, aplikasi mobile, sistem custom, dan solusi teknologi untuk transformasi digital bisnis.",
  icons: {
    icon: "/logo.png",
  },
  verification: {
    google: "google-site-verification=7dydqvd9YRt8iGwBXwCn3bs7jbABNoG2dmaVE4TMeco",
  },
  keywords: [
    "software development",
    "web development",
    "mobile app development",
    "custom software",
    "perusahaan teknologi",
    "jasa pembuatan aplikasi",
     "jasa pembuatan website murah",
      "jasa pembuatan website",
       "jasa pembuatan website lamongan",
        "Indonesia",
         "jawa timur",
         "lamongan",
  ],
  openGraph: {
    title: "Devklit Tech | JASA PEMBUATAN WEBSITE LAMONGAN",
    description:
      "Kami membangun solusi software modern dan scalable untuk bisnis digital.",
    url: "https://devklittech.my.id",
    type: "website",
    images: [
      {
        url: "https://devklittech.my.id/images/thumbnail.png",
        width: 1200,
        height: 630,
        alt: "Devklit Tech Thumbnail",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Devklit Tech | Software Development Company",
    description:
      "Kami membangun solusi software modern dan scalable untuk bisnis digital.",
    images: ["https://devklittech.my.id/images/thumbnail.png"], // sama seperti OG image
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <title>DEVKLIT TECHNOLOGY - JASA PEMBUATAN WEBSITE LAMONGAN</title>
      <body className={`${poppins.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
