import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import LocationOnRounded from '@material-ui/icons/LocationOnRounded';
import CallRounded from '@material-ui/icons/CallRounded';
import EmailRounded from '@material-ui/icons/EmailRounded';
import { GridContainer, GridItem } from '../../components/Grid';
import GoogleMap from '../../components/GoogleMap';
import { title, container, primaryColor } from '../../styles/commonStyles';

const ContactSection: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12}>
            <h2 className={classes.title}>Contact Us</h2>
            <div>
              <GridContainer justify="center" alignItems="stretch">
                <GridItem xs={12} sm={12} md={4}>
                  <GridContainer direction="column" justify="center" alignItems="center" className={classes.contactList}>
                    <GridItem xs={12} className={classes.contact}>
                      <div className={classes.iconWrapper}>
                        <LocationOnRounded className={classes.icon} />
                      </div>
                      <div className={classes.contactDetail}>
                        Address xxx, 01234 Helsinki
                      </div>
                    </GridItem>
                    <GridItem xs={12} className={classes.contact}>
                      <div className={classes.iconWrapper}>
                        <CallRounded className={classes.icon} />
                      </div>
                      <div className={classes.contactDetail}>
                        +358 123 456 789
                      </div>
                    </GridItem>
                    <GridItem xs={12} className={classes.contact}>
                      <div className={classes.iconWrapper}>
                        <EmailRounded className={classes.icon} />
                      </div>
                      <div className={classes.contactDetail}>
                        example@email.com
                      </div>
                    </GridItem>
                  </GridContainer>
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                  <GoogleMap
                    lat={60.1718723}
                    lng={24.94142058}
                    name="Otakaari 5, 02150 Espoo"
                    color={primaryColor}
                    zoom={15}
                  />
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
    marginBottom: '4rem',
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
  },
  contactList: {
    marginBottom: '1rem',
    height: '100%'
  },
  contact: {
    marginTop: '1.5rem'
  },
  iconWrapper: {
    color: primaryColor
  },
  icon: {
    width: '36px',
    height: '36px'
  },
  contactDetail: {
    fontSize: '1rem',
    marginBottom: '1rem',
    marginTop: '0.5rem'
  }
}));

export default ContactSection;
