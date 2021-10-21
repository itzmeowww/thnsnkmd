import Template from "../../components/Template";
import { Container } from "../../components/Container";
import linkList from "../../data/link"
const Tanabata = () => {
  return (
    <Container myTitle="menu memo — Thanasan Kumdee">
      {" "}
      <Template data={linkList['menu-memo']} />
    </Container>
  );
};

export default Tanabata;
