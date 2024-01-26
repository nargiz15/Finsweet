import { Box, Stack, Typography } from "@mui/material";
import FeaturesData from "../../Info/FeaturesData";

const Features = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", marginTop: "40px" }}>
        <Typography sx={{ paddingTop: "90px" }} variant="h2">
          Features
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "rgba(215, 152, 225, 0.15)",
          borderRadius: "25px",
          marginTop: "50px",
        }}
      >
        <Stack direction={"row"} spacing={4} padding={"40px"}>
          {FeaturesData.map(({ img, title, text }) => {
            return (
              <Stack direction={"column"} spacing={2}>
                <img width={"50px"} src={img} alt="icon" />
                <Typography variant="h4">{title}</Typography>
                <Typography
                  sx={{ color: "rgba(29, 33, 48, 1)", opacity: "87%" }}
                  variant="body2"
                >
                  {text}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
      </Box>
    </>
  );
};

export default Features;
