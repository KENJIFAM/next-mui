import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { GridContainer, GridItem } from '../../components/Grid';
import { title, container } from '../../styles/commonStyles';

const AboutSection: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10}>
            <h2 className={classes.title}>About Us</h2>
            <h5 className={classes.description}>
              We are a start-up based in Helsinki, Finland.
              At StepOut, we are on a mission to create a network of fitness & recreational art schools, trainers, dancers, and various physical art forms & mental well-being activities. <br />
              This platform is for the crazy ones who want to try out new fitness/dance/recreational regimes every day, for the lazy ones who want to lead a healthy life but do not seem to find the motivation to get it done somewhere nearby, for the ones who are bored of their daily gym routine. Here's the twist we will get you to the corners of your city holding immense talent with a single weekly or monthly subscription. <br />
              STEP-OUT is a feeling - a feeling to just step out (of your comfort zone) and do it!
            </h5>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => createStyles({
  section: {
    padding: '100px 0',
    textAlign: 'center',
    background: 'linear-gradient(45deg, rgba(42,27,161,1) 500%, rgba(29,210,177,0.5) 500%)',
    position: 'relative',
    '&:before': {
      backgroundImage: 'url("static/img/home/crossword.png")',
      backgroundRepeat: 'repeat',
      opacity: 0.7,
      zIndex: 1,
      position: 'absolute',
      width: '100%',
      height: '100%',
      display: 'block',
      left: '0',
      top: '0',
      content: '""'
    }
  },
  container: {
    zIndex: 12,
    color: 'inherit',
    ...container
  },
  title: {
    ...title,
    marginBottom: '1rem',
    marginTop: '30px',
    minHeight: '32px',
    textDecoration: 'none',
    fontSize: '2.5rem',
    fontWeight: 500,
    color: '#fff'
  },
  description: {
    fontWeight: 300,
    color: '#ddd',
    fontSize: '1.2rem',
    lineHeight: '2rem'
  }
}));

export default AboutSection;
