import { Grid, Typography } from "@mui/material";
import React from "react";
import Map from "../components/Map";
import bgi from "../components/images/contactBg.jpg"
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';

function ContactUS() {
  return (
    <Grid container justifyContent={"center"} p={4} sx={{backgroundImage:`url(${bgi})`,backgroundSize:'cover', backgroundAttachment:"fixed",backgroundRepeat:"no-repeat"}}>
      <Grid
        container
        item
        xs={12}
        md={8}
        p={4}
        sx={{height:'600px',justifyContent: "center" ,backgroundColor:'rgba(0, 0, 0, 0.5)',borderRadius:"15px"}}>
        <Grid container item xs={12}md={6}>
          <Grid container item gap={4} xs={12}>
            <Typography variant="h4" sx={{fontSize:{xs:'1.125rem',sm:'2.125rem'}}} color={"#ed6c02"}>КОНТАКТНАЯ ИНФОРМАЦИЯ КОМПАНИИ</Typography>
            <Grid container item xs={12} alignItems={"center"}>
              <CallIcon color="warning"/>
              <Typography variant="p" sx={{fontSize:{xs:'16px',md:"20px"}}} color={"white"}>
                (123) 456 7890
              </Typography>
            </Grid>
            <Grid container item xs={12} alignItems={"center"}>
              <EmailIcon color="warning"/>
              <Typography variant="p" sx={{fontSize:{xs:'16px',md:"20px"}}} color={"white"}>
                MAIL@DEMOLINK.ORG
              </Typography>
            </Grid>
            <Grid container item xs={12} alignItems={"center"}>
              <LocationOnIcon color="warning"/>
              <Typography variant="p" sx={{fontSize:{xs:'16px',md:"20px"}}} color={"white"}>
                (123) 456 7890
              </Typography>
            </Grid>
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
