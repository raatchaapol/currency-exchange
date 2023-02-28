import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AdbIcon from '@mui/icons-material/Adb';

interface INavbar {
   title: string;
}

function Navbar({ title }: INavbar) {
   return (
      <AppBar position="sticky">
         <Container maxWidth="xl">
            <Toolbar 
               sx={{ justifyContent: 'center' }}
               disableGutters 
            >
               <AdbIcon sx={{ display: 'flex', mr: 1 }} />
               <Typography
                  variant="h6"
                  noWrap
                  component="a"
                  href="/"
                  sx={{
                     display: 'flex',
                     fontFamily: 'monospace',
                     fontWeight: 700,
                     letterSpacing: '.3rem',
                     color: 'inherit',
                     textDecoration: 'none',
                  }}
               >
                  {title}
               </Typography>
            </Toolbar>
         </Container>
      </AppBar>
   );
}
export default Navbar;