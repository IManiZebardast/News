import React from 'react';
import { Card, CardMedia, CardContent, Typography,CardActions } from '@mui/material';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import Box from '@mui/material/Box'
import Navbar from '@/components/Header/navbar';
import { Container } from '@mui/material';


export default function Signin() {
    return(
        <>
        <Navbar/>
        <Box
        sx={{display: 'center',
        justifyContent:'Center',
         alignItem:'Cneter',
         minHeight:'100vh',
         mt:'150px'
         
         }}>


         <Card sx={{ maxWidth: 345 }}>

      <CardMedia>< AccountBoxIcon sx={{
        ml:'120px',
        height:'90px',
        width:'90px',
        color:'#6001d2',
        display:'center'}}/>
        </CardMedia>

      <CardContent sx={{ml:'50px'}}>
        <Typography sx={{ml:'55px'}} gutterBottom variant="h4" component="div">
          Signin
        </Typography>
        <TextField  id="outlined-basic" label="UserName" variant="outlined" sx={{mb:'10px'}}/>
        <TextField  id="outlined-basic" label="Password" variant="outlined" type="password"/>
      </CardContent>

      <Button variant="contained" 
      sx={{
        ml:'80px',
        backgroundColor:'#6001d2',
        width: '50%',
        justifyContent:'Center'
        ,display: 'center',
        }}>Submit</Button>

      <CardActions sx={{ml:'50px'}}>

         <Typography variant="body2">you dont have account?</Typography>
        <Button size="small">Signup</Button>

      </CardActions>
    </Card>
    </Box>
        </>
    )
}