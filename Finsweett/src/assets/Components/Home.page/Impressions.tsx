import { Button, Typography, Stack, Box } from "@mui/material";
import ImpressionPhoto from "../../Images/Impression.png.png";

const Impressions = (props: any) => {
  return (
    <>
      <Stack
        direction={"row"}
        alignItems={"center"}
        spacing={5}
        paddingTop={"120px"}
      >
        <Stack direction={"column"} spacing={3}>
          <Typography variant="h3">{props.title}</Typography>
          <Typography sx={{ opacity: "60%" }} variant="body2">
            {props.text}
          </Typography>
          <Button
            sx={{
              backgroundColor: "#1D2130",
              padding: "20px",
              borderRadius: "15px",
              width: "175px",
            }}
            size="medium"
            variant="contained"
          >
            {props.btnText}
          </Button>
        </Stack>
        <Box>
          <img src={ImpressionPhoto} alt="" />
        </Box>
      </Stack>
    </>
  );
};

export default Impressions;
