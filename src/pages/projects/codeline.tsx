import Template from "../../components/Template";
import { Container } from "../../components/Container";
import linkList from "../../data/link"
const Tanabata = () => {
  return (
    <Container myTitle="Senior-Junior matcher — Thanasan Kumdee">
      {" "}
      <Template data={linkList["codeline"]} />
    </Container>
  );
};

export default Tanabata;
