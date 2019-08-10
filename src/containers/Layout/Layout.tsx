import * as React from 'react';
import Box from '@material-ui/core/Box';
import Navbar from '../../components/Navbar';
import NavbarLinks from '../../components/NavbarLinks';

const Layout: React.FC = ({ children }) => {
 return (
   <Box>
     <Navbar
      color="white"
      brand={<img src="static/brand.jpg" />}
      rightLinks={<NavbarLinks />}
      fixed
      changeColorOnScroll={{
        height: 400,
        color: 'white'
      }}
    />
    <Box>{children}</Box>
   </Box>
 );
};

export default Layout;