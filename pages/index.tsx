import * as React from 'react';
import { NextPage } from 'next/types';
import clsx from 'clsx';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import MainSection from '../src/containers/Home/MainSection';
import FeatureSection from '../src/containers/Home/FeatureSection';
import AboutSection from '../src/containers/Home/AboutSection';
import RegisterSection from '../src/containers/Home/RegisterSection';
import ContactSection from '../src/containers/Home/ContactSection';
import FAQSection from '../src/containers/Home/FAQSection';

const Home: NextPage<{}> = () => {
  const classes = useStyles();
  return (
    <>
      <MainSection />
      <div className={clsx(classes.main, classes.mainRaised)}>
        <FeatureSection />
        <AboutSection />
        <RegisterSection />
        <FAQSection />
        <ContactSection />
      </div>
    </>
  );
};

const useStyles = makeStyles(() => createStyles({
  main: {
    background: '#FFFFFF',
    position: 'relative',
    zIndex: 3
  },
  mainRaised: {
    boxShadow:
      '0 -16px 24px 2px rgba(0, 0, 0, 0.14), 0 -6px 30px 5px rgba(0, 0, 0, 0.12), 0 -8px 10px -5px rgba(0, 0, 0, 0.2)'
  }
}));

export default Home;