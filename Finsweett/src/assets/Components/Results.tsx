import { Avatar, Box, Card, Stack, Typography } from "@mui/material";
import ResultsData from "../Info/ResultsData";
import { BorderColor } from "@mui/icons-material";

const Results = () => {
  return (
    <>
      <Box sx={{ textAlign: "center", marginBottom: "20px" }}>
        <Typography
          sx={{ paddingTop: "70px", paddingBottom: "30px" }}
          variant="h3"
        >
          The stunning results our customers have experienced
        </Typography>
      </Box>

      <Stack direction={"row"} spacing={3}>
        {ResultsData.map(({ text, img, name, job }) => {
          return (
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "7px",
                padding: "60px",
                textAlign: "center",
                borderRadius: "12px",
                backgroundColor: "white",
                border: "2px solid rgba(97, 153, 237, 0.26)",
              }}
            >
              <Typography variant="body2">{text}</Typography>
              <Box sx={{ textAlign: "center" }}>
                <img
                  width={"50px"}
                  height={"50px"}
                  src={img}
                  alt="workerPhoto"
                />
              </Box>
              <Typography variant="h5">{name}</Typography>
              <Typography
                sx={{ color: "grey", opacity: "75%" }}
                variant="body2"
              >
                {job}
              </Typography>
            </Box>
          );
        })}
      </Stack>
    </>
  );
};

export default Results;
