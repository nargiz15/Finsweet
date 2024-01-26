import { Container, Typography } from "@mui/material";
import MainPhoto from "./MainPhoto";






import Solutions from "./Solutions";
import BusinesAnalyze from "./BusinesAnalyze";
import Impressions from "./Impressions";
import Features from "./Features";
import Results from "../Results";
import ImpressionPng from "../../Images/Impression.png.png"
<style>
  @import
  url('https://fonts.googleapis.com/css2?family=Lato:wght@300;400&family=Montserrat&family=Roboto:wght@300&display=swap');
</style>;

const Menu = (props: any) => {
  return (
    <>
      <Typography
        sx={{
          fontSize: "55px",
          textAlign: "center",
          paddingTop: "70px",
          fontFamily: "Roboto",
        }}
        variant="h1"
      >
        The Best Software to Grow <br></br> your Sales and Services
      </Typography>

      <Typography
        sx={{
          textAlign: "center",
          lineHeight: "27px",
          color: "#36373a",
          fontSize: "18px",
          marginTop: "30px",
        }}
        variant="body1"
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor <br></br>invidunt ut labore et dolore magna aliquyam erat.
      </Typography>

      <Container sx={{ paddingTop: "60px" }}>
        <MainPhoto></MainPhoto>
        <Container />
        <Typography
          sx={{ textAlign: "center", paddingTop: "80px", color: "blue" }}
          variant="h6"
        >
          High-quality
        </Typography>
        <Typography
          sx={{
            textAlign: "center",
            fontSize: "50px",
            marginTop: "15px",
            fontFamily: "Roboto",
            marginBottom: "25px",
          }}
          variant="h2"
        >
          We have the Best Solution <br></br> for your Business
        </Typography>
        <Solutions></Solutions>
        <BusinesAnalyze
          title={"Why should you work with us?"}
          mainTitle={"To upscale your business to the next level"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore."
          }
        />
        <Impressions
          title={"More impressions, more conversions"}
          btnText={"Get Free Trial"}
          img={ImpressionPng}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore."
          }
        />

        <BusinesAnalyze
          title={"Discover More"}
          mainTitle={"Analyze your sales and marketing leads"}
          text={
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua invidunt ut labore."
          }
        />
        <Features />
        <Results />
      </Container>
     
      
     
     
    </>
  );
};

export default Menu;
