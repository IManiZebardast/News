import * as react from 'react';
import { Card, CardMedia, CardContent, Typography} from '@mui/material';
import Grid from '@mui/material/Grid';
type CardItem = {
    id: number;
    title: string;
    description: string;
    image: string;
  };

type NewsCardProps = {
    items:CardItem[];
}; 

export default function NewsCard ({items}:NewsCardProps){

    return (
        <>
        <Grid container spacing={1} direction="row" alignItems="flex-start">
            {items.map((item) =>(
                <Grid item xs={12} sm={6} md={2.4} key={item.id} >
                        <Card 
                        sx={{display:'inline',m:'5px',Shadow:'none',width:'0px',flexDirection: 'row'}}  
                        >
                            <CardMedia component="img"
                            image={item.image}
                            alt={item.title}
                            sx={{height:'80px',width:'130px' ,objectFit: 'cover'}}
                            />
                            <CardContent 
                            sx={{ display:'row' ,justifyContent: 'center',height:'80px',flexDirection: 'row',}}
                            >
                            <Typography variant="h6">{item.title}</Typography>
                     {/* <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
                             {item.description}
                      </Typography> */}
                            </CardContent>
        
                        </Card>
                </Grid>
            )
        )}
        </Grid>
        </>
    )

}