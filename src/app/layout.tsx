import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/header";
import Footer from "./components/layout/footer";

const bricolageGrotesque = Bricolage_Grotesque({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Krishank Dave | Data Scientist",
  description: "Portfolio of Krishank Dave — Data Scientist passionate about machine learning, data visualization, and building data-driven solutions.",
  // Use the current logo SVG as the site icon. Note: some browsers
  // prefer an actual .ico or .png; if you still don't see changes,
  // create a `public/favicon.ico` (or a small PNG) and copy your logo there.
  icons: {
    icon: "/images/logo/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={bricolageGrotesque.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
