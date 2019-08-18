import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { GridContainer, GridItem } from '../../components/Grid';
import { title, container } from '../../styles/commonStyles';

const FAQSection: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>FAQ</h2>
            <div>
              <GridContainer justify="center">
                <GridItem xs={12} sm={12} md={6}>
                  <h4 className={classes.question}>Lorem ipsum dolor sit amet?</h4>
                  <p className={classes.answer}>Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <h4 className={classes.question}>Duis aute irure dolor in reprehenderit?</h4>
                  <p className={classes.answer}>In voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                </GridItem>
              </GridContainer>
            </div>
          </GridItem>
        </GridContainer>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => createStyles({
  section: {
    padding: '100px 0',
    background: 'linear-gradient(45deg, rgba(42,27,161,1) 500%, rgba(29,210,177,0.5) 350%)',
    position: 'relative',
    '&:before': {
      backgroundImage: 'url("static/img/home/gplay.png")',
      backgroundRepeat: 'repeat',
      opacity: 0.4,
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
    textAlign: 'center',
    color: '#fff'
  },
  question: {
    ...title,
    color: '#fff',
    fontSize: '24px',
    fontWeight: 500
  },
  answer: {
    fontWeight: 300,
    color: '#ddd',
    fontSize: '1rem',
    lineHeight: '2rem'
  }
}));

export default FAQSection;
