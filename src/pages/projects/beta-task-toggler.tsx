import Template from "../../components/Template";
import { Container } from "../../components/Container";
import linkList from "../../data/link";
const BetaTaskToggler = () => {
  return (
    <Container myTitle="thai synonym — Thanasan Kumdee">
      {" "}
      <Template data={linkList["beta-task-toggler"]} />
    </Container>
  );
};

export default BetaTaskToggler;
