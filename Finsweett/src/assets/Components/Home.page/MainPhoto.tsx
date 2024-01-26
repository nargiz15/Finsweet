import { Box } from "@mui/material";
import DashboardImage from "../../Images/Dashboard image.png";
const MainPhoto = () => {
  return (
    <>
      <Box>
        <Box sx={{ textAlign: "center" }}>
          <img width={"800px"} height={"450px"} src={DashboardImage} alt="" />
        </Box>
      </Box>
    </>
  );
};

export default MainPhoto;
