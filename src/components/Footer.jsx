import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import { Grid } from '@mui/material';

function Footer() {
  return (
    <Grid container>
        <Grid container item xs={12} sx={{background:'black',height:'100px'}}>
            <FacebookIcon/>            
            <InstagramIcon/>
        </Grid>
    </Grid>
  )
}

export default Footer