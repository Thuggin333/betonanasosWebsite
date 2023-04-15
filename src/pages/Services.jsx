import React from "react";

// components
import { Typography, Grid } from "@mui/material";
import ServicesCard from "../components/card/ServicesCard";

function Services() {
  return (
    <div id="services">
      <Grid container justifyContent="center" p={4}>
        <Grid container item xs={12} sm={12} md={10} lg={8}>
          <Grid item p={2} xs={12}>
            <Typography
              variant="h2"
              sx={{
                fontSize: {
                  xs: "28px",
                  md: "44px",
                  fontFamily: "Oswald",
                  fontWeight: "600",
                },
              }}>
              Services
            </Typography>
            <Typography variant="p">
              We supply cement to manufacturers of building materials and its
              official distributors, and do not work with resellers and packers.
            </Typography>
          </Grid>
          <Grid container item justifyContent="space-between" gap={4} xs={12}>
            <Grid
              item
              sx={{
                borderRadius: "15px",
                boxShadow: "-1px -1px 25px -8px rgb(0,0,0)",
                webkitBoxShadow: "-1px -1px 25px -3px rgb(0,0,0)",
                mozBoxShadow: "-1px -1px 25px -3px rgb(0,0,0)",
              }}
              xs={12}
              sm={3}>
              <ServicesCard />
            </Grid>
            <Grid
              item
              sx={{
                borderRadius: "15px",
                boxShadow: "-1px -1px 25px -8px rgb(0,0,0)",
                webkitBoxShadow: "-1px -1px 25px -3px rgb(0,0,0)",
                mozBoxShadow: "-1px -1px 25px -3px rgb(0,0,0)",
              }}
              xs={12}
              sm={3}>
              <ServicesCard />
            </Grid>
            <Grid
              item
              sx={{
                borderRadius: "15px",
                boxShadow: "-1px -1px 38px -8px rgb(0,0,0)",
                webkitBoxShadow: "-1px -1px 38px -8px rgb(0,0,0)",
                mozBoxShadow: "-1px -1px 38px -3px rgb(0,0,0)",
              }}
              xs={12}
              sm={3}>
              <ServicesCard />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Services;
