import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

// images
import img1 from "../components/images/mt-2074-gal-1.jpg"
import img2 from "../components/images/mt-2074-gal-2.jpg"
import img3 from "../components/images/mt-2074-gal-3.jpg"
import img4 from "../components/images/mt-2074-gal-4.jpg"
import img5 from "../components/images/mt-2074-gal-5.jpg"
import img6 from "../components/images/mt-2074-gal-6.jpg"
import img7 from "../components/images/mt-2074-gal-7.jpg"
import img8 from "../components/images/mt-2074-bg-1.jpg"


const itemData = [
    {
      img: img1,
      title: 'Breakfast',
      rows: 2,
      cols: 2,
    },
    {
      img: img2,
      title: 'Burger',
    },
    {
      img: img3,
      title: 'Camera',
    },
    {
      img: img4,
      title: 'Coffee',
      cols: 2,
    },
    {
      img: img5,
      title: 'Hats',
      cols: 2,
    },
    {
      img: img6,
      title: 'Honey',
      author: '@arwinneil',
      rows: 2,
      cols: 2,
    },
    {
      img: img7,
      title: 'Basketball',
    },
    {
      img: img8,
      title: 'Basketball',
    }
  ];

function srcset(image, size, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Imglist() {
  return (
    <ImageList
      sx={{ width: "100%", height: 450 }}
      variant="quilted"
      cols={4}
      rowHeight={121}
    >
      {itemData.map((item) => (
        <ImageListItem key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <img
            {...srcset(item.img, 121, item.rows, item.cols)}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
}

