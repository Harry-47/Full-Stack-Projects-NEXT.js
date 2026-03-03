import { Google_Sans } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Veriflow  ",
  description: "AI Verification and Reverse Search Engine",
};

const googleSans = Google_Sans({
  variable: "--font-google-sans",
});

export default function RootLayout({ children }) {
  return (
   
      <html lang="en" suppressHydrationWarning>
        <body className={`${googleSans.variable}  antialiased`}>
          {children}
        </body>
      </html>
   
  );
}
