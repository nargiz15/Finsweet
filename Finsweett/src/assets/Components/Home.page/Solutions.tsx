import { Box, Stack, Typography } from "@mui/material";
import SolutionsData from "../../Info/SolutionsData";

const Solutions = () => {
  return (
    <>
      <Stack
        direction={"row"}
        spacing={4}
        alignItems={"center"}
        sx={{
          backgroundColor: " #E0E4FC",
          padding: "30px",
          borderRadius: "24px",
        }}
      >
        {SolutionsData.map(({ icon, title, description }) => {
          return (
            <Stack direction={"column"} spacing={2}>
              <Box color={"#E0E4FC"} padding={"20px"}>
                <img src={icon} alt="" />
              </Box>

              <Typography sx={{ fontSize: "32px" }} variant="h3">
                {title}
              </Typography>
              <Typography sx={{ opacity: "50%" }} variant="body1">
                {description}
              </Typography>
            </Stack>
          );
        })}
      </Stack>
    </>
  );
};

export default Solutions;
