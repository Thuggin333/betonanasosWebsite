import { Typography,Grid } from '@mui/material'
import React from 'react'
import ServicesCard from "../components/card/ServicesCard";

function Services() {
  return (
    <Grid container rowSpacing={{xs:5}} sx={{display:"flex",justifyContent:'center'}} xs={12} p={4}>
        <Grid item  xs={9}>
            <Typography variant='h2'>Services</Typography>
            <Typography variant="p">
            We supply cement to manufacturers of building materials and its official distributors, and do not work with resellers and packers.
            </Typography>
        </Grid>
        <Grid container sx={{display:"flex",justifyContent:'space-evenly'}} columnSpacing={{ xs: 1, sm: 2, md: 4 }} item xs={12}>
            <Grid sx={{border:"1px solid black"}} item xs={2}>
            <ServicesCard/>
            </Grid>
            <Grid item xs={2}>
            <ServicesCard />
            </Grid>
            <Grid item xs={2}>
            <ServicesCard />
            </Grid>
        </Grid>
    </Grid>
  )
}

export default Services