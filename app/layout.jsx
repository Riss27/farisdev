import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/ThemeProvider";
import AppWrapper from "@/components/AppWrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Faris Dev | Portfolio",
  description: "Portfolio Muhammad Faris Fathur Rohman - Web Developer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className={`${inter.className} bg-white text-black dark:bg-black dark:text-white antialiased selection:bg-black selection:text-white dark:selection:bg-white dark:selection:text-black transition-colors duration-500`}>
        <ThemeProvider>
          <AppWrapper>
            {children}
          </AppWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
