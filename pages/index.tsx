import * as React from 'react';
import { NextPage } from 'next/types';
import clsx from 'clsx';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
// import Container from '@material-ui/core/Container';
// import Typography from '@material-ui/core/Typography';
// import Box from '@material-ui/core/Box';
// import ProTip from '../src/components/ProTip';
// import Link from '../src/components/Link';
import MainSection from '../src/containers/Home/MainSection';
import { container } from '../src/styles/commonStyles';
import ProductSection from '../src/containers/Home/ProductSection';

const Home: NextPage<{}> = () => {
  const classes = useStyles();
  return (
    <>
      <MainSection />
      <div className={clsx(classes.main, classes.mainRaised)}>
        <div className={classes.container}>
          <ProductSection />
          {/* <<Container maxWidth="sm">
            <Box my={4}>
              <Typography variant="h4" component="h1" gutterBottom>
                Next.js with TypeScript example
              </Typography>
              <Link href="/about" color="secondary">
                Go to the about page
              </Link>
              <ProTip />
            </Box>
          </Container>> */}
        </div>
      </div>
    </>
  );
};

const useStyles = makeStyles(() => createStyles({
  container: {
    zIndex: 12,
    color: 'inherit',
    ...container
  },
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: 3
  },
  mainRaised: {
    borderRadius: '6px',
    boxShadow:
      '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)'
  }
}));

export default Home;