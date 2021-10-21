import Template from "../../components/Template";
import { Container } from "../../components/Container";
import linkList from "../../data/link"
const Tanabata = () => {
  return (
    <Container myTitle="K·NOW — Thanasan Kumdee">
      {" "}
      <Template data={linkList['know']} />
    </Container>
  );
};

export default Tanabata;
