import { Box, Grid } from "@mui/material";
import React from "react";
import SliderHome from "./slider/SliderHome";

const homeStyle = {
  width: "100%",
  height: "100vh",
};

function Home() {
  return (
    <Box sx={{height:'100vh', width:1,position:'relative'}}>
      <Box sx={{position:'absolute',zIndex:5,width:'100%',height:"100%"}}>
        <Grid container justifyContent={"center"} alignItems={"center"}>
          <Grid item height={400} xs={6}>
            
          </Grid>
        </Grid>
      </Box>
      <Grid container sx={homeStyle}>
        <SliderHome />      
      </Grid>
    </Box>
  );
}

export default Home;
