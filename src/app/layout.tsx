import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Inter, Space_Grotesk } from "next/font/google";
import { getImageUrl } from "@/utils/imagePath";
import "./globals.css";

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ergohome | Ergonomía + Diseño",
  description: "Transformamos tu hogar a través de la ergonomía",
  icons: {
    icon: getImageUrl("/HOME_web/Ergohome_Logo_Negro_Limpio-500.png"),
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
