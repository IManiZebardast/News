'use clinte'
import React from 'react';
import { AppBar, Toolbar } from '@mui/material';
import logo from '../../public/images/logo.png';
import Image from 'next/image';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import EmailIcon from '@mui/icons-material/Email';
import Button from '@mui/material/Button';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import MicIcon from '@mui/icons-material/Mic';
import { useRouter } from 'next/navigation'



export default function Navbar() {
  const router = useRouter();
  
  const handleSignin = () =>{
    router.push('/signin');
  };
  const handleFinance = () =>{
    router.push('/Finance');
  };
  const handleEmail = () =>{
    router.push('/Email');
  };
  const handleSport = () =>{
    router.push('/Sport');
  };
  const handleNews = () =>{
    router.push('/News');
  };
  return (
    <AppBar sx={{ background: 'white', boxShadow: 'none' }}>
      <Toolbar sx={{ color: 'black', boxShadow: 'none' }}>
        <Image src={logo} alt="logo" width={140} height={0} />
        <Paper
          component="form"
          sx={{ 
            p: '2px 4px',
            ml: '10px',
            display: 'flex',
            alignItems: 'center',
            width: '60%',
            background: '#f0f3f5',
            boxShadow: 'none',
            borderRadius: '100px'
          }}
        >
          <InputBase
            sx={{ ml: '10px', flex: 1, boxShadow: 'none' }}
            placeholder="Search"
            inputProps={{ 'aria-label': 'search' }}
          />
          <IconButton type="button" sx={{ color: 'black' }}>
            <MicIcon />
          </IconButton>
          <IconButton
            type="button"
            sx={{
              display: 'flex',
              flexWrap: 'wrap',
              border: '1px solid',
              borderRadius: '20px',
              backgroundColor: '#5001d2',
              borderColor: '#f0f3f5',
              color: 'white',
              width: '72px',
              height: '100%',
              position: 'relative',
            }}
          >
            <SearchIcon />
          </IconButton>
        </Paper>
        <Button onClick={handleNews} sx={{ ml: '40px', pl: '10px', color: '#5b636a' }}>News</Button>
        <Button onClick={handleFinance} sx={{ ml: '30px', pl: '10px', color: '#5b636a' }}>Finance</Button>
        <Button onClick={handleSport} sx={{ ml: '30px', pl: '10px', color: '#5b636a' }}>Sport</Button>
        <Button
          id="mode"
          sx={{ ml: '30px', pl: '10px', color: '#5b636a' }}
          startIcon={<DarkModeIcon />}
        ></Button>
        <Button
         onClick={handleEmail}
          sx={{
            ml: '50px',
            display: 'flex',
            flexWrap: 'wrap',
            border: '1px solid',
            borderRadius: '20px',
            borderColor: '#6001d2',
            color: '#6001d2',
            width: '10%',
          }}
          variant="outlined"
          startIcon={<EmailIcon />}
        >
          Mail
        </Button>
        <Button
        onClick={handleSignin}
          sx={{
            ml: '10px',
            display: 'flex',
            flexWrap: 'wrap',
            border: '1px solid',
            borderRadius: '20px',
            borderColor: '#e0e4e9',
            color: '#6001d2',
            width: '12%',
          }}
          variant="outlined"
          startIcon={<AccountCircleIcon />}
        >
          Sign in
        </Button>
      </Toolbar>
    </AppBar>
  );
}
