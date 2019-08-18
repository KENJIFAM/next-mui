import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import Fab from '@material-ui/core/Fab';
import NavigationIcon from '@material-ui/icons/Navigation';
import Parallax from '../../components/Parallax';
import { GridContainer, GridItem } from '../../components/Grid';
import { container, title } from '../../styles/commonStyles';

const MainSection: React.FC = () => {
  const classes = useStyles();
  return (
    <div>
      <Parallax filter image="static/img/home/landing-bg2.jpg">
        <div className={classes.container}>
          <GridContainer
            direction="row"
            justify="flex-start"
            alignItems="baseline"
          >
            <GridItem xs={12}>
              <h1 className={classes.title}>Next Mui App</h1>
              <h4 className={classes.text}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. <br />
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </h4>
              <Fab
                variant="extended"
                color="primary"
                aria-label="add"
              >
                <NavigationIcon className={classes.extendedIcon} />
                <span className={classes.extendedText}>GET STARTED</span>
              </Fab>
            </GridItem>
          </GridContainer>
        </div>
      </Parallax>
    </div>
  );
};

const useStyles = makeStyles((theme: Theme) => createStyles({
  container: {
    zIndex: 12,
    color: 'inherit',
    ...container
  },
  title: {
    ...title,
    fontSize: '45px',
    display: 'inline-block',
    position: 'relative',
    minHeight: '32px',
    color: theme.palette.primary.contrastText,
    textDecoration: 'none',
    fontWeight: 500
  },
  text: {
    fontWeight: 300,
    color: theme.palette.primary.contrastText,
    fontSize: '18px'
  },
  extendedIcon: {
    marginRight: theme.spacing(1)
  },
  extendedText: {
    fontSize: '18px'
  }
}));

export default MainSection;
