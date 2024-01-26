import { Box, Button, Container, FormControl, Stack, TextField, Typography } from "@mui/material"
import Logo from "../../Images/F-Logo no color.png"
import { useState } from "react";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MyLink from "@mui/material/Link";
import { Link } from "react-router-dom";

const footerData = [
  {
    head: "Company",
    link1: "About Us",
    link2: "Why Choose us",
    link3: "Pricing",
    link4: "Testimonial"
  },
  {
    head: "Resources",
    link1: "Privacy Policy",
    link2: "Terms and Condition",
    link3: "Blog",
    link4: "contact us"

  },
  {
    head: "Product",
    link1: "Project managment",
    link2: "Time tracker",
    link3: "Time schedule",
    link4: "Lead generate",
    link5: "Remote Collaboration"
  }
]

const Footer = () => {
  const [email, SetEmail] = useState("")

  const sendUserEmail = (e: any) => {
    e.preventDefault()
    if (email.length === 0) {
      console.log("error");

    } else {
      console.log(email);
      SetEmail("")
    }
  }
  return (
    <Stack sx={{ backgroundColor: "#1D2130" , marginTop: "40px"}} >
      <Container maxWidth="lg" sx={{ padding: "70px 0" }}>
        <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} >
          <Stack direction={"row"} width={"50%"} justifyContent={"space-between"}  >
            {
              footerData.map(({ head, link1, link2, link3, link4 }, index) => (
                <Stack key={index} gap={"15px"}>
                  <Typography sx={{ fontWeight: "700", color: "white" }}>{head}</Typography>
                  <MyLink component={Link} to={"/pricing"} sx={{ color: "white", opacity: 0.6, textDecoration:"none"}} >
                    {link1}
                  </MyLink>
                  <MyLink component={Link} to={"/contact"} sx={{ color: "white", opacity: 0.6,textDecoration:"none" }}>
                    {link2}
                  </MyLink>
                  <MyLink component={Link} to={"/blog"} sx={{ color: "white", opacity: 0.6,textDecoration:"none" }}>
                    {link3}
                  </MyLink>
                  <MyLink component={Link} to={"/"} sx={{ color: "white", opacity: 0.6,textDecoration:"none" }}>
                    {link4}
                  </MyLink>
                </Stack>
              ))
            }
          </Stack  >
          <Stack direction={"column"} gap={"25px"}>
            <Box >
              <img src={Logo} alt="" />
            </Box>
            <Typography sx={{ color: "white" }}>Subscribe to our Newsletter</Typography>
            <FormControl >
              <Stack direction={"row"} sx={{ background: "#2B2E3C", border: "1px solid #1D2130", borderRadius: "20px", padding: "3px 6px", color: "white" }} alignItems={"center"} justifyContent={"space-between"} width={"400px"} >
                <Box
                  component="form"
                  sx={{
                    width: 500, maxWidth: '100%', '.MuiOutlinedInput-root': { border: 'none', }, '.Mui-focused .MuiOutlinedInput-notchedOutline': {
                      border: 'none',
                      color:"white"
                    },
                  }}>
                  <TextField
                    id="outlined-basic" value={email} onChange={(e) => SetEmail(e.target.value)} placeholder="Enter your Email" variant="outlined" focused sx={{ width: "100%", opacity: "0.8", fontSize: "16px", color: "white" }} />
                </Box>
                <Box>
                  <Button onClick={sendUserEmail} variant="contained" sx={{ backgroundColor: "white", color: "#1d2130", fontSize: "14px", borderRadius: "12px", padding: "10px 20px", width: "150px", "&:hover": { backgroundColor: "#1d2130", color: "white" } }} >Subscribe</Button>
                </Box>
              </Stack>
            </FormControl>
          </Stack>
        </Stack>

        <Stack direction={"row"} justifyContent={"space-between"} alignItems={"center"} sx={{ paddingTop: "60px " }} >
          <Box sx={{ width: "372px", height: "1px", backgroundColor: " #888" }}></Box>
          <Typography sx={{ color: "white", opacity: "0.5" }}>© Copyright Finsweet 2022</Typography>
          <FacebookRoundedIcon sx={{ color: "white", opacity: "0.5" }} />
          <TwitterIcon sx={{ color: "white", opacity: "0.5" }} />
          <InstagramIcon sx={{ color: "white", opacity: "0.5" }} />
          <LinkedInIcon sx={{ color: "white", opacity: "0.5" }} />
          <Box sx={{ width: "372px", height: "1px", backgroundColor: " #888" }}></Box>

        </Stack>

      </Container>
    </Stack>
  )
}

export default Footer