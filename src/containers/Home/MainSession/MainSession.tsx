import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Parallax from '../../../components/Parallax';
import { GridContainer, GridItem } from '../../../components/Grid';
import { container, title } from '../../../styles/commonStyles';

const MainSession: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Parallax filter image="static/img/home/landing-bg1.jpg">
        <div className={classes.container}>
          <GridContainer
            direction="row"
            justify="flex-end"
            alignItems="baseline"
          >
            <GridItem xs={12} sm={12} md={6}>
              <h1 className={classes.title}>Introducing StepOut version 0.1</h1>
              <h4 className={classes.text}>
                Looking for a trainer or being a trainer? <br />
                Your one-stop destination to fitness & recreation.
              </h4>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    </div>
  );
};

const useStyles = makeStyles(() => createStyles({
  container: {
    zIndex: 12,
    color: 'inherit',
    ...container
  },
  title: {
    ...title,
    fontSize: '55px',
    display: 'inline-block',
    position: 'relative',
    marginTop: '30px',
    minHeight: '32px',
    color: 'inherit',
    textDecoration: 'none'
  },
  text: {
    fontWeight: 400,
    fontSize: '25px'
  }
}));

export default MainSession;
