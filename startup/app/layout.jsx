import "./globals.css";
import { Google_Sans, Poppins} from "next/font/google";

// Font configuration
const sans = Google_Sans({
  subsets: ["latin"],
  weight: ['400'],
  variable: '--font-google-sans'
});

const poppins = Poppins({
  subsets:['latin'],
  weight: ['400'],
  variable: '--font-poppins'
})




export default function RootLayout({children}) {
  return (
    <html>
      <head>
      </head>
      <body
        className={`${sans.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
