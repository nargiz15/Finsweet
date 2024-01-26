import { Box, Container, Stack, Typography } from "@mui/material";

const ClinetFeedback = (props: any) => {
  return (
    <>
      <Container sx={{ marginTop: "60px" }}>
        <Stack direction={"row"} alignItems={"center"} spacing={20}>
          <Stack direction={"column"} spacing={3}>
            <Typography
              sx={{ color: "blue", fontFamily: "Roboto" }}
              variant="h6"
            >
              {props.title}
            </Typography>
            <Typography sx={{ width: "576px" }} variant="h3">
              {props.mainTitle}
            </Typography>
            <Typography
              sx={{
                width: "576px",
                lineHeight: "24px",
                opacity: "85%",
                color: "rgba(29, 33, 48, 1)",
              }}
              variant="body2"
            >
              {props.description}
            </Typography>
          </Stack>

          <Box>
            <img
              width={"480px"}
              height={"460px"}
              src={props.img}
              alt="feedback"
            />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default ClinetFeedback;
