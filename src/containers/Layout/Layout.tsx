import * as React from 'react';
import { useRouter } from 'next/router';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Box from '@material-ui/core/Box';
import Navbar from '../../components/Navbar';
import NavbarLinks from '../../components/NavbarLinks';
import Footer from '../../components/Footer';

const Layout: React.FC = ({ children }) => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <>
      <Box>
        <Navbar
          color={router.pathname === '/' ? 'transparent' : 'white'}
          brand={(
            <>
              <img src="static/color_logo_40.png" />
              <span className={classes.brand}>Next Mui App</span>
            </>
          )}
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
  brand: {
    marginLeft: '10px',
    fontSize: '1.75rem',
    paddingTop: '5px'
  },
  content: {
    marginTop: '0'
  },
  footer: {
    marginBottom: '30px',
    marginTop: '30px'
  }
}));

export default Layout;