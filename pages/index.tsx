import * as React from 'react';
import { NextPage } from 'next/types';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import ProTip from '../src/components/ProTip';
import Link from '../src/components/Link';
import MainSession from '../src/containers/Home/MainSession/MainSession';

const Home: NextPage<{}> = () => {
  return (
    <>
      <MainSession />
      <Container maxWidth="sm">
        <Box my={4}>
          <Typography variant="h4" component="h1" gutterBottom>
            Next.js with TypeScript example
          </Typography>
          <Link href="/about" color="secondary">
            Go to the about page
          </Link>
          <ProTip />
        </Box>
      </Container>
    </>
  );
};

export default Home;