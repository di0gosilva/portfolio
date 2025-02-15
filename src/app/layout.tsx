import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";

const fontAeonik = localFont({
  src: [
    {
      path: "../../public/fonts/AeonikNormal-400.otf",
      weight: '400',
      style: "normal",
    },
    {
      path: "../../public/fonts/AeonikMedium-500.otf",
      weight: '500',
      style: "medium",
    },
    {
      path: "../../public/fonts/AeonikBold-700.otf",
      weight: '700',
      style: "bold",
    },
  ],
});

export const metadata: Metadata = {
  title: "Diogo Silva",
  description: "Portfólio de Diogo Silva",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className=
        {`
          ${fontAeonik.className}
          antialiased
        bg-black
        text-white
        `}
      >
        {children}
      </body>
    </html>
  );
}
