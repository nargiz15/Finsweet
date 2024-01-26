import { Stack, Typography } from "@mui/material";
import ArrowIcon from "../../Images/Icon4.svg";

const Lorems = () => {
  return (
    <>
      <Stack direction={"row"} alignItems={"center"} spacing={2}>
        <img width={"50px"} src={ArrowIcon} alt="arrowLogo" />
        <Typography
          variant="body1"
          sx={{ lineHeight: "24px", fontSize: "18px", opacity: "80%" }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod.
        </Typography>
      </Stack>
    </>
  );
};

export default Lorems;
