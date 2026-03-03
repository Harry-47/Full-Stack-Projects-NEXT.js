import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Container({ children }) {
  return (
    <div
      className={`min-h-screen flex flex-col grow font-google-sans`}
    >
      <Navbar />
      <main className="pt-20">{children}</main>
      <Footer />
    </div>
  );
}
