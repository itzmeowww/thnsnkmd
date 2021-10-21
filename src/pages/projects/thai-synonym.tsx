import Template from "../../components/Template";
import { Container } from "../../components/Container";
import linkList from "../../data/link"
const Tanabata = () => {
  return (
    <Container myTitle="thai synonym — Thanasan Kumdee">
      {" "}
      <Template data={linkList['thai-synonym']} />
    </Container>
  );
};

export default Tanabata;
