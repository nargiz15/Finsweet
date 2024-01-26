import { Container } from "@mui/material";
import Impressions from "../Home.page/Impressions";
import ClinetFeedback from "./ClinetFeedback";
import Image from "../../Images/Image.png";
import Image3 from "../../Images/Image3.png";
import Colloborations from "./Colloborations";
import Image2 from "../../Images/image2.png";
import Features from "../Home.page/Features";

const Product = (props: any) => {
  return (
    <Container>
      <Impressions
        title={"Grow your Sales and Services"}
        btnText={"Get Started"}
        text={
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        }
      />

      <ClinetFeedback
        title={"Marketing insights"}
        img={Image}
        mainTitle={"Data-driven client feedback"}
        description={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy  eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
        }
      />

      <Colloborations
        title={"Time tracker"}
        img={Image3}
        mainTitle={"Track your project performance"}
        description={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
        }
      />

      <ClinetFeedback
        title={"Lead Generation"}
        img={Image2}
        mainTitle={"More leads that convert"}
        description={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
        }
      />

      <Colloborations
        title={"Remote teams"}
        img={Image3}
        mainTitle={"Real-time collaboration"}
        description={
          "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren."
        }
      ></Colloborations>

      <Features></Features>
    </Container>
  );
};

export default Product;
