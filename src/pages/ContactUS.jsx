import { Grid, Typography } from "@mui/material";
import React from "react";
import Map from "../components/Map";
import Form from "../components/Form";

function ContactUS() {
  return (
    <Grid container justifyContent={"center"} p={4} height={"600px"}>
      <Grid
        container
        item
        xs={12}
        md={10}
        sx={{height:'600px',justifyContent: "center" }}>
        <Grid container item xs={12}md={6}>
          <Grid container item gap={4} xs={12}>
            <Typography variant="h4">Contact Us</Typography>
          </Grid>
          <Grid container item xs={12}>
            <Form/>
          </Grid>
        </Grid>
        <Grid container item xs={12} md={6}>
          <Map/>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ContactUS;
