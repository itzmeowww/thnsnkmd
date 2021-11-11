import Template from "../../components/Template";
import { Container } from "../../components/Container";
import linkList from "../../data/link"
const Tanabata = () => {
  return (
    <Container myTitle="Wholdstill — Thanasan Kumdee">
      {" "}
      <Template data={linkList['wholdstill']} />
    </Container>
  );
};

export default Tanabata;
