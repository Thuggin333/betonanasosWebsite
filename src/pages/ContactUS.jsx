import { Grid, Typography } from "@mui/material";
import React from "react";
import Map from "../components/Map";

function ContactUS() {
  return (
    <Grid container justifyContent={"center"} p={4}>
      <Grid
        container
        item
        xs={8}
        sx={{ height: "600px", justifyContent: "center" }}>
        <Grid container item xs={6}>
          <Typography varian="h4">Contact Us</Typography>
          <Typography varian="p">
            Whatever types of questions you'll have, feel free to get in touch
            with us
          </Typography>
          <Grid container item xs={12}> 
            <Map/>
          </Grid>
        </Grid>
        <Grid container item xs={6}>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ContactUS;
