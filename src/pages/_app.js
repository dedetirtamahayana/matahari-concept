import { Mulish } from "next/font/google";

import "../styles/globals.css";
const mulish = Mulish({
  subsets: ["latin"],
  variable: "--font-mulish",
});

export default function MyApp({ Component, pageProps }) {
  return (
    <main className={`${mulish.variable} font-sans`}>
      <Component {...pageProps} />
    </main>
  );
}
