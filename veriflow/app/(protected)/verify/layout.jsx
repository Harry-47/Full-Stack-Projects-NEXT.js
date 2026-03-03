import Navbar from "../../components/layout/Navbar"
import Container from "../../components/layout/Container";

export default function VerifyLayout({ children }) {
return (
<Container >
  <Navbar title={"Verification Center"}/>
      {children}
 </Container>
)

}