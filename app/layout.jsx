import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

<meta property="og:site_name" content="Sameer Khadka"></meta>;
export const metadata = {
  metadataBase: new URL("https://sameer-khadka.com.np"),
  title: "Sameer Khadka | Full Stack Developer",
  description:
    "Experienced Full Stack Developer specializing in modern web technologies. View my projects and skills.",
  keywords: "Full Stack Developer, Web Development, JavaScript, React, Node.js",
  author: "Sameer Khadka",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sameer-khadka.com.np",
    site_name: "Sameer Khadka Portfolio",
    images: [
      {
        url: "/alien.svg",
        width: 1200,
        height: 630,
        alt: "Sameer Khadka - Full Stack Developer",
      },
    ],
  },
  twitter: {
    handle: "@SameerKhadkax28",
    site: "@SameerKhadkax28",
    cardType: "summary_large_image",
  },
  icons: {
    icon: "/alien.svg",
    apple: "/apple-touch-icon.png",
    favicon: "/favicon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} bg-secondary scroll-smooth`}
    >
      <body className="font-sans antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
