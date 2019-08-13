import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Chat from '@material-ui/icons/Chat';
import VerifiedUser from '@material-ui/icons/VerifiedUser';
import Fingerprint from '@material-ui/icons/Fingerprint';
import { GridContainer, GridItem } from '../../components/Grid';
import InfoArea from '../../components/InfoArea';
import { title, container } from '../../styles/commonStyles';

const FeatureSection: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <h2 className={classes.title}>What if you could join any fitness class with just one app?</h2>
            <h5 className={classes.description}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h5>
          </GridItem>
        </GridContainer>
        <div>
          <GridContainer>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Feature 1"
                description="Lorem ipsum dolor sit amet, consectetur dolor in reprehenderit in voluptate velit esse adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                icon={Chat}
                iconColor="info"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Feature 2"
                description="Ut enim ad minim veniam, quis nostrud dolor in reprehenderit in voluptate velit esse  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
                icon={VerifiedUser}
                iconColor="success"
                vertical
              />
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <InfoArea
                title="Feature 3"
                description="Duis aute irure cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                icon={Fingerprint}
                iconColor="danger"
                vertical
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

const useStyles = makeStyles(() => createStyles({
  section: {
    padding: '70px 0',
    textAlign: 'center',
    background: '#f5f5f5'
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
    fontWeight: 500
  },
  description: {
    fontWeight: 300,
    color: '#444',
    fontSize: '1.2rem',
    lineHeight: '2rem'
  }
}));

export default FeatureSection;
