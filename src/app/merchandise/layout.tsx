import type { Metadata } from "next";
import { MerchProvider } from "../context/MerchContext";

export const metadata: Metadata = {
  title: "Ticket ITP 2024",
  icons: {
    icon: '/icon.ico'
  },
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <MerchProvider>
        {children}
    </MerchProvider>
  );
}