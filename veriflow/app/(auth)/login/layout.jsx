import Container from "../../components/layout/Container";

export const metadata = {
  title: "Login",
  description: "AI Verification and Reverse Search Engine",
};

export default function MarketingLayout({ children }) {
  return (
    <Container>
      <main className="grow">{children}</main>
    </Container>
  );
}
