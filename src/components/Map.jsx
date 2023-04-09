import { Grid } from "@mui/material";
import React from "react";

function Map() {
  return (
    <Grid container>
      <iframe
        title="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3047.2347058458145!2d44.506475415701814!3d40.2038417764827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406aa2b571bfd18f%3A0x7c2887426295bd07!2z1LPVrNW41aLVq9W21aM!5e0!3m2!1shy!2sam!4v1681039770348!5m2!1shy!2sam"
        style={{
        width:"100%",
        height:"100%",
        allowfullscreen:"",
        loading:"lazy",
        referrerpolicy:"no-referrer-when-downgrade"
        }}
        ></iframe>
    </Grid>
  );
}

export default Map;
