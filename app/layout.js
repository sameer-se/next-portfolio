import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Sameer Khadka",
  description: "Full Stack Developer",
  image: "/code-solid.svg",
  icons: {
    icon: "/code-solid.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html className="bg-secondary" lang="en">
      <body className={poppins.className}>
        {" "}
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
