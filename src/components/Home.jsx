import { Grid } from "@mui/material";
import React from "react";
import SliderHome from "./slider/SliderHome";

const homeStyle = {
  width: "100%",
  height: "100vh",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function Home() {
  return (
    <Grid container sx={homeStyle}>
        <SliderHome />      
    </Grid>
  );
}

export default Home;
