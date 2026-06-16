import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AuthProvider from "@/context/AuthContext"; // Assuming you have this
import "./globals.css";

export const metadata = {
  title: "EminiBazar",
  description: "Plant Marketplace",
};

export default function RootLayout({ children }) {
  return (
    // suppressHydrationWarning is REQUIRED here when using next-themes
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-white dark:bg-gray-900 transition-colors duration-300">
        <AuthProvider>
          <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
            <Navbar />

            
            <main className="grow">{children}</main>

            <Footer />
          </ThemeProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
