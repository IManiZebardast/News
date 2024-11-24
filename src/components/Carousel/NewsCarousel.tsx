import * as react from 'react';
import SwipeableViews from 'react-swipeable-views';
import { Box, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';
import { autoPlay } from 'react-swipeable-views-utils';


// dataCarousel is my own file

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

type NewsItem = {
    id: number;
    title: string;
    description: string;
    url: string;
    imageUrl: string;
    publishedAt: string;
    image: string;
  };

type NewsCarouselProps = {
    items:NewsItem[];
}

export default function NewsCarousel ({items}:NewsCarouselProps){

return (
    <>
    <Box>
    <AutoPlaySwipeableViews>
        {items.map((item,index) =>(
             <Box key={item.id} style={{ position: 'relative', display: 'flex' }}>
             <Card sx={{ display: 'flex', width: '100%' }}>
               <CardMedia
                 component="img"
                 image={item.image}
                 alt={item.title}
                 sx={{  height: '250px',
                   width:'550px',
                  objectFit: 'cover'}}
               />
               <CardContent sx={{ width: '50%', display: 'flex', flexDirection: 'column', justifyContent: 'center',background:'#DEDEDE',borderRadius:'10px' }}>
                 <Typography variant="h5">{item.title}</Typography>
                 <Typography variant="body2" color="text.secondary">
                   {item.description}
                 </Typography>
                 <Typography variant="caption" color="text.secondary">
                   Published at: {new Date(item.publishedAt).toLocaleDateString()}
                 </Typography>
               </CardContent>
             </Card>
           </Box>
        ))}
    </AutoPlaySwipeableViews>
    </Box>
    </>
)    

}