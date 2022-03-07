import Template from "../../components/Template";
import { Container } from "../../components/Container";
import linkList from "../../data/link";
const Geacher = () => {
  return (
    <Container myTitle="Geacher — Thanasan Kumdee">
      {" "}
      <Template data={linkList["geacher"]} />
    </Container>
  );
};

export default Geacher;
