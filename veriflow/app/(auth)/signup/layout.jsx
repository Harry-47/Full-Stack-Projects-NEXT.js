import Container from "../../components/layout/Container";

export const metadata = {
  title: "Sign Up",
  description: "AI Verification and Reverse Search Engine",
};

export default function MarketingLayout({ children }) {
  return (
    <Container>
      <main className="grow">{children}</main>
    </Container>
  );
}
