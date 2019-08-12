import * as React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Navbar from '../../components/Navbar';
import NavbarLinks from '../../components/NavbarLinks';
import Footer from '../../components/Footer';

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  return (
    <>
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
      </Box>
      <Box className={classes.content}>{children}</Box>
      <Box className={classes.footer}>
        <Footer />
      </Box>
    </>
  );
};

const useStyles = makeStyles(() => createStyles({
  content: {
    marginTop: '76px'
  },
  footer: {
    marginBottom: '30px',
    marginTop: '30px'
  }
}));

export default Layout;