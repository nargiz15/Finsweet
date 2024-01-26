import { Box, Container, Stack, Typography } from "@mui/material";

const Colloborations = (props: any) => {
  return (
    <>
      <Container>
        <Stack direction={"row"} spacing={20} alignItems={"center"}>
          <Box>
            <img width={"550"} height={"440px"} src={props.img} alt="" />
          </Box>

          <Stack direction={"column"} spacing={3}>
            <Typography
              sx={{ color: "blue", fontFamily: "Roboto" }}
              variant="h6"
            >
              {props.title}
            </Typography>
            <Typography variant="h3">{props.mainTitle}</Typography>
            <Typography
              sx={{ opacity: "80%", lineHeight: "24px", fontFamily: "Roboto" }}
              variant="body2"
            >
              {props.description}
            </Typography>
          </Stack>
        </Stack>
      </Container>
    </>
  );
};

export default Colloborations;
