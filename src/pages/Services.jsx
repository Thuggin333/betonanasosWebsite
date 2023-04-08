import React from 'react'

// components
import { Typography,Grid } from '@mui/material'
import ServicesCard from "../components/card/ServicesCard";

function Services() {
  return (
    <Grid container justifyContent="center" p={4}>
      <Grid container item  xs={12} sm={12} md={10} lg={8}>
        <Grid item p={2} xs={12}>
            <Typography variant='h2' sx={{fontSize:{xs:"28px",md:'44px',fontFamily:'Oswald',fontWeight: "600"}}}>Services</Typography>
            <Typography variant="p">
            We supply cement to manufacturers of building materials and its official distributors, and do not work with resellers and packers.
            </Typography>
        </Grid>
        <Grid container item  justifyContent="space-between" gap={4} xs={12}>
            <Grid item sx={{border:"2px solid",borderRadius:'15px'}}  xs={12} sm={3} >
            <ServicesCard/>
            </Grid >
            <Grid item sx={{border:"2px solid",borderRadius:'15px'}} xs={12} sm={3}>
            <ServicesCard />
            </Grid>
            <Grid item sx={{border:"2px solid",borderRadius:'15px'}} xs={12} sm={3}>
            <ServicesCard />
            </Grid>
        </Grid> 
    </Grid>
    </Grid>
  )
} 


export default Services