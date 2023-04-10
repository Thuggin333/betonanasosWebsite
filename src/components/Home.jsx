import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import SliderHome from "./slider/SliderHome";

const homeStyle = {
  width: "100%",
  height: "100vh",
};

function Home() {
  return (
    <Grid
      container
      sx={{
        height: "100vh",
        width: 1,
        position: "relative",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <Grid
        container
        item
        sx={{
          backgroundColor: `rgba(0, 0, 0, 0.4)`,
          position: "absolute",
          zIndex: 5,
          width: { xs: "80%", md: "50%" },
          height: "50%",
          borderRadius: "15px",
        }}>
        <Grid item p={4} alignItems={"center"} xs={12}>
          <Typography variant="h4"color={"white"} >
            БЕТОН ОТ ПРОИЗВОДИТЕЛЯ
          </Typography>
          <Typography variant="p" color={"white"}>
            Производство и доставка бетона в Москве
          </Typography>
        </Grid>
      </Grid>
      <Grid container sx={homeStyle}>
        <SliderHome />
      </Grid>
    </Grid>
  );
}

export default Home;
