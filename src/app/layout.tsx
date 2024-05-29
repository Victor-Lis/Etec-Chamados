import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import { AuthProvider } from "@/providers/auth";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Etec Chamados",
  description:
    "Etec chamados, o sistema de chamados da Etec Professor Carmine Biagio Tundisi - Atibaia/SP",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AuthProvider>
      <html lang="pt-br">
        <body className={inter.className}>
          <Header />
          {children}
        </body>
      </html>
    </AuthProvider>
  );
}
