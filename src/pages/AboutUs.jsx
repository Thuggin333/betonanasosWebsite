import { Button, Grid, Typography, useMediaQuery } from '@mui/material'
import { useTheme } from "@mui/material/styles"
import React from 'react'

// images
import img3 from '../components/images/img3.png'
import imgCar from '../components/images/mt-2074-why-icon1.png'
import imgMan from '../components/images/mt-2074-why-icon2.png'
import imgBox from '../components/images/mt-2074-why-icon3.png'
import bgImg from '../components/images/mt-2074-bg-1.jpg'

// icons
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import EmailIcon from '@mui/icons-material/Email';
import Imglist from '../components/ImgList'
import ContactUS from './ContactUS'



function AboutUs() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
    return (
            <Grid container>
            <Grid container sx={{backgroundImage:`url(${img3})`,height:'400px'}} item xs={12}>
                <Grid item height={"400px"} xs={12} md={6} lg={5}></Grid>
                <Grid container gap={4} item p={4} xs={12} md={6} lg={4} sx={{backgroundColor:'white'}}>
                    <Grid container item xs={12}>
                        <Typography variant="h4" sx={{fontSize:{xs:"36px"}}}>
                            WHY CHOOSE US
                        </Typography>
                        <Typography variant="p" sx={{fontSize:{xs:"16px"}}}>
                            We supply cement to manufacturers of building materials and its official distributors.
                        </Typography>
                    </Grid>
                    <Grid container item xs={12}>
                        <Grid container item  xs={12}>
                            <Grid container item xs={3}>
                                <img src={imgCar} width={"39px"} height={"37px"} />
                            </Grid>
                            <Typography variant="p" >
                                Producing Cement of the Highest Quality
                            </Typography>
                        </Grid>
                        <Grid container item  xs={12}>
                            <Grid container item xs={3}>
                                <img src={imgMan} width={"39px"} height={"37px"} />
                            </Grid>
                            <Typography variant="p">
                                Producing Cement of the Highest Quality
                            </Typography>
                        </Grid>
                        <Grid container item  xs={12}>
                            <Grid container item xs={3}>
                                <img src={imgBox} width={"39px"} height={"37px"} />
                            </Grid>
                            <Typography variant="p">
                                Producing Cement of the Highest Quality
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item xs={12} md={12} lg={3}>
                    <Grid container item p={2} xs={12} sx={{background:'#ffa800',border:'1px solid white',justifyContent:'center',alignItems:'center'}}>
                        <Grid container item xs={6}>
                            <CallIcon sx={{color:'white'}}/>
                        </Grid>
                        <Grid container item xs={6}>
                            <Typography variant="h6" sx={{fontSize:{xs:"14px"},color:'white'}}>
                                CALL (123) 456 7890
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item p={2} xs={12} sx={{background:'#ffa800',border:'1px solid white',justifyContent:'center',alignItems:'center'}}>
                        <Grid container item xs={6}>
                            <EmailIcon sx={{color:'white'}}/>
                        </Grid>
                        <Grid container item xs={6}>
                            <Typography variant="h6" sx={{fontSize:{xs:"14px"},color:"white"}}>
                                MAIL@DEMOLINK.ORG
                            </Typography>
                        </Grid>
                    </Grid>
                    <Grid container item p={2} xs={12} sx={{background:'#ffa800',border:'1px solid white',justifyContent:'center',alignItems:'center'}}>
                        <Grid container  item xs={12} justifyContent={"space-between"}>
                            <FacebookIcon sx={{color:'white'}}/>
                            <InstagramIcon sx={{color:'white'}}/>
                            <FacebookIcon sx={{color:'white'}}/>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container item p={4} xs={12} sx={{backgroundImage:`url(${bgImg})`,height:'400px',backgroundSize:'cover',justifyContent:'center'}}>
                    <Grid container item xs={10} justifyContent={"center"} alignItems={"center"}>
                        <Grid container item xs={12}>
                            <Typography variant="h3" color={"white"} sx={{fontSize:{xs:"20px",md:"40px"}}}>
                                NEED HELP? CONTACT US ANYTIME, WE ARE ALWAYS READY TO HELP YOU
                            </Typography>
                        </Grid>
                        <Grid container item xs={12}>
                            <Button variant="contained" color='warning'>
                                Call me (123) 456 7890
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
                {isMobile ? (
                            <Imglist/>
                        ):(
                            <></>
                        )
                    }
                <Grid container item xs={12}>
                    <ContactUS/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default AboutUs