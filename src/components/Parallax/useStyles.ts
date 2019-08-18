import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => createStyles({
  parallax: {
    height: '100vh',
    maxHeight: '1000px',
    overflow: 'hidden',
    position: 'relative',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',
    margin: '0',
    padding: '0',
    border: '0',
    display: 'flex',
    alignItems: 'center'
  },
  filter: {
    '&:before': {
      background: 'linear-gradient(10deg, rgba(29,210,177,0.7) 10%, rgba(42,27,161,0.8) 90%)'
    },
    '&:after,&:before': {
      position: 'absolute',
      zIndex: 1,
      width: '100%',
      height: '100%',
      display: 'block',
      left: '0',
      top: '0',
      content: '""'
    }
  },
  small: {
    height: '380px'
  }
}));

export default useStyles;
