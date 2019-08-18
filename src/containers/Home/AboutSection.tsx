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
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
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
