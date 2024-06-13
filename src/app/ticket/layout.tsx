import type { Metadata } from "next";
import { FormProvider } from "../context/PurchaseContext";

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
    <FormProvider>
        {children}
    </FormProvider>
  );
}