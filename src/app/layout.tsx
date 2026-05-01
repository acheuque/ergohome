import type { Metadata } from "next";
import Script from "next/script";
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
  description: "Llevamos la ergonomía y el diseño de vanguardia a los espacios más importantes de tu vida cotidiana. Diseños personalizados de cocinas, lavanderías y sistemas modulares.",
  keywords: ["Ergonomía", "Ergología", "Ergo-logía", "Diseño de Interiores", "Remodelaciones", "Cocinas", "Chile"],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Ergohome | Ergonomía + Diseño",
    description: "Llevamos la ergonomía y el diseño de vanguardia a los espacios más importantes de tu vida cotidiana. Diseños personalizados de cocinas, lavanderías y sistemas modulares.",
    url: "https://ergohome.cl",
    siteName: "Ergohome",
    locale: "es_CL",
    type: "website",
  },
  icons: {
    icon: [
      { url: getImageUrl("/images/HOME_web/Ergohome_Logo_Negro_Limpio-500.png"), media: '(prefers-color-scheme: light)' },
      { url: getImageUrl("/images/HOME_web/Ergohome_Logo_Blanco_Limpio-500.png"), media: '(prefers-color-scheme: dark)' },
    ],
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
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','${process.env.NEXT_PUBLIC_GTM_ID}');
          `}
        </Script>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${inter.variable} ${spaceGrotesk.variable} antialiased`}
      >
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${process.env.NEXT_PUBLIC_GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
