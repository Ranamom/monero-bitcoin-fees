import "./globals.css";
import localFont from "next/font/local";
import clsx from "clsx";
import Footer from "./components/Footer";

const satoshi = localFont({
  src: "../../public/fonts/Satoshi-Variable.woff2",
  variable: "--font-satoshi",
  weight: "300 900",
  display: "swap",
  style: "normal",
});

export const metadata = {
  title: "Monero vs Bitcoin fees",
  description:
    "Discover the cost-effective solution for low transaction fees. Compare Monero and Bitcoin fees and learn how Monero offers affordable transactions. Say goodbye to high fees and start saving with Monero's privacy-focused approach. Explore now!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={clsx(
          "min-h-screen bg-astro-gray-700 text-white font-display overflow-x-hidden",
          satoshi.variable
        )}
      >
        {children}
        <Footer />
      </body>
    </html>
  );
}
