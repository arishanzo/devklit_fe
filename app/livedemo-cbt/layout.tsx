import type { Metadata } from "next";
import "../globals.css";

export const metadata: Metadata = {
  title: "Simulasi CBT CAT 2026 | Devklit Tech",
  icons: {
    icon: "/logo.png",
  },
  description:
    "Simulasi ujian Computer Assisted Test (CAT) dengan standardisasi kurikulum nasional untuk PNS, PPPK, TNI/POLRI, BUMN, dan SBMPTN.",
};

export default function CBTLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
