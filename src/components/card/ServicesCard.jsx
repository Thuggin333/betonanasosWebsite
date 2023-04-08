import * as React from 'react';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';

export default function ImgMediaCard() {
  return (
    <Grid container>
      <CardMedia
        component="img"
        alt="green iguana"
        width={"100%"}
        height={"100%"}
        sx={{borderRadius:'15px 15px 0 0'}}
        image="https://template113523.motopreview.com/mt-demo/113500/113523/mt-content/uploads/2020/08/mt-2074-services-img3.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squame reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Grid>
  );
}