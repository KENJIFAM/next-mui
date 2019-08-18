import React from 'react';
import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { GridContainer, GridItem } from '../../components/Grid';
import { title, container } from '../../styles/commonStyles';

const RegisterSection: React.FC = () => {
  const classes = useStyles();
  return (
    <div className={classes.section}>
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={10}>
            <h2 className={classes.title}>Send us a message?</h2>
            <form>
              <GridContainer className={classes.form}>
                <GridItem xs={12} sm={12} md={6}>
                  <Input
                    labelText="Name"
                    id="name"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12} sm={12} md={6}>
                  <Input
                    labelText="Email"
                    id="email"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <GridItem xs={12}>
                  <Input
                    labelText="Subject"
                    id="subject"
                    formControlProps={{
                      fullWidth: true
                    }}
                  />
                </GridItem>
                <Input
                  labelText="Your Message"
                  id="message"
                  formControlProps={{
                    fullWidth: true,
                    className: classes.textArea
                  }}
                  inputProps={{
                    multiline: true,
                    rows: 8
                  }}
                />
                <GridContainer justify="center">
                  <GridItem
                    xs={12}
                    sm={12}
                    md={4}
                    className={classes.textCenter}
                  >
                    <Button color="primary" round>Send Message</Button>
                  </GridItem>
                </GridContainer>
              </GridContainer>
            </form>
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
  form: {
    borderRadius: '10px',
    background: '#fff',
    padding: '30px',
    boxShadow:
      '0 8px 17px 0 rgba(0,0,0,.2), 0 6px 20px 0 rgba(0,0,0,.19)'
  },
  textCenter: {
    textAlign: 'center'
  },
  textArea: {
    marginRight: '15px',
    marginLeft: '15px'
  }
}));

export default RegisterSection;
