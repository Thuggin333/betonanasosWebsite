import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import img from '../images/mt-2074-gal-5.jpg'

export default function BasicCard() {
  return (
    <Card variant="outlined" sx={{ width: "100%"}}>
      <Typography level="h2" fontSize="md" sx={{ mb: 0.5 }}>
        Yosemite National Park
      </Typography>
      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 }}>
        <img
          src={img}
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <Box sx={{ display: 'flex' }}>
        <Button
          variant="solid"
          size="sm"
          color="warning"
          aria-label="Explore Bahamas Islands"
          sx={{fontWeight: 600,width:"100%" }}
        >
          Explore
        </Button>
      </Box>
    </Card>
  );
}