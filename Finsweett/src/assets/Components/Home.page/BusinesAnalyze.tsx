import { Stack, Typography } from "@mui/material";
import Lorems from "./Lorems";

const BusinesAnalyze = (props: any) => {
  return (
    <>
      <Stack direction={"row"} spacing={3} alignItems={"center"}>
        <Stack direction={"column"} spacing={3} paddingTop={"100px"}>
          <Typography sx={{ color: "blue" }} variant="h6">
            {props.title}
          </Typography>
          <Typography sx={{ width: "576px" }} variant="h3">
            {props.mainTitle}
          </Typography>
          <Typography
            sx={{ width: "576px", fontWeight: 200, opacity: "70%" }}
            variant="body1"
          >
            {props.text}
          </Typography>
        </Stack>
        <Stack direction={"column"} spacing={4} paddingTop={"100px"}>
          <Lorems></Lorems>
          <Lorems></Lorems>
          <Lorems></Lorems>
        </Stack>
      </Stack>
    </>
  );
};

export default BusinesAnalyze;
