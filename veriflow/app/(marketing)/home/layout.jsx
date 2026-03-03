import Footer from "../../components/layout/Footer";
import Navbar from "../../components/layout/Navbar";
import Container from "../../components/layout/Container";
export const metadata = {
  title: "Veriflow",
  description: "AI Verification and Reverse Search Engine",
};

export default function MarketingLayout({ children }) {
  return (
    <Container>
      <Navbar />
      <main className="grow">{children}</main>
      <Footer />
    </Container>
  );
}
