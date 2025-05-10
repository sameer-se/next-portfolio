import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  weight: ["200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata = {
  metadataBase: new URL("https://sameer-khadka.com.np"),
  title: {
    default: "Sameer Khadka | Software Developer",
    template: "%s | Sameer Khadka",
  },
  description:
    "Personal portfolio of Sameer Khadka, a Software Developer and Fullstack Engineer based in Nepal.",
  keywords: [
    "Sameer Khadka",
    "Software Developer",
    "Software Engineer",
    "Web Developer",
    "Fullstack Engineer",
    "Fullstack Developer",
    "Nepal",
    "React",
    "Next.js",
  ],
  authors: [{ name: "Sameer Khadka" }],
  creator: "Sameer Khadka",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sameer-khadka.com.np",
    title: "Sameer Khadka | Software Developer",
    description:
      "Personal portfolio of Sameer Khadka, a Software Developer and Fullstack Engineer based in Nepal.",
    siteName: "Sameer Khadka Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sameer Khadka | Software Developer",
    description:
      "Personal portfolio of Sameer Khadka, a Software Developer and Fullstack Engineer based in Nepal.",
  },
  icons: {
    icon: "/alien.svg",
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
