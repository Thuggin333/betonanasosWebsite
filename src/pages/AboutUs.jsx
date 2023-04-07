import { Grid, Typography } from '@mui/material'
import React from 'react'
import img3 from '../components/images/img3.png'


function AboutUs() {
    return (
        <Grid container>
            <Grid container sx={{backgroundImage:`url(${img3})`,height:'400px'}} item xs={12}>
                <Grid item xs={6}></Grid>
                <Grid container item xs={3} md={4} sx={{backgroundColor:'white'}}>
                    <Grid container item xs={12}>
                    <Typography variant="h4">
                        WHY CHOOSE US
                    </Typography>
                    <Typography variant="p">
                        We supply cement to manufacturers of building materials and its official distributors.
                    </Typography>
                    </Grid>
                    <Grid container item xs={12}  md={4}>
                        <Typography variant="p">
                            Producing Cement of the Highest Quality
                        </Typography>
                        <Typography varian="p">
                            Producing Cement of the Highest Quality
                        </Typography>
                        <Typography varian="p">
                            Producing Cement of the Highest Quality
                        </Typography>
                    </Grid>
                </Grid>
                <Grid container item xs={3} md={2}>
                    <Grid item xs={12} sx={{background:'#ffa800',border:'1px solid white'}}>
                        <Typography variant="h6">
                            CALL (123) 456 7890
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{background:'#ffa800',border:'1px solid white'}}>
                        <Typography variant="h6">
                            CALL (123) 456 7890
                        </Typography>
                    </Grid>
                    <Grid item xs={12} sx={{background:'#ffa800',border:'1px solid white'}}>
                        <Typography variant="h6">
                            CALL (123) 456 7890
                        </Typography>
                    </Grid>
                    
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AboutUs