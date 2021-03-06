import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';

const useStyles = makeStyles(() => createStyles({
  marker: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    width: '18px',
    height: '18px',
    backgroundColor: '#000',
    border: '2px solid #fff',
    borderRadius: '100%',
    userSelect: 'none',
    transform: 'translate(-50%, -50%)',
    '&:hover': {
      zIndex: 1
    }
  },
  pin: {
    width: '30px',
    height: '30px',
    borderRadius: '50% 50% 50% 0',
    background: '#00cae9',
    position: 'absolute',
    transform: 'rotate(-45deg)',
    left: '50%',
    top: '50%',
    margin: '-20px 0 0 -20px',
    '&:after': {
      content: '""',
      width: '14px',
      height: '14px',
      margin: '8px 0 0 8px',
      background: '#e6e6e6',
      position: 'absolute',
      borderRadius: '50%',
      right: '26%'
    }
  },
  '@keyframes pulsate': {
    '0%': {
      transform: 'scale(0.1, 0.1)',
      opacity: 0
    },
    '50%': {
      opacity: 1
    },
    '100%': {
      transform: 'scale(1.2, 1.2)',
      opacity: 0
    }
  },
  '@keyframes bounce': {
    '0%': {
      opacity: 0,
      transform: 'translateY(-2000px) rotate(-45deg)'
    },
    '60%': {
      opacity: 1,
      transform: 'translateY(30px) rotate(-45deg)'
    },
    '80%': {
      transform: 'translateY(-10px) rotate(-45deg)'
    },
    '100%': {
      transform: 'translateY(0) rotate(-45deg)'
    }
  },
  bounce: {
    animationName: '$bounce',
    animationFillMode: 'both',
    animationDuration: '1s'
  },
  pulse: {
    background: '#d6d4d4',
    borderRadius: '50%',
    height: '14px',
    width: '14px',
    position: 'absolute',
    left: '50%',
    top: '50%',
    margin: '11px 0px 0px -12px',
    transform: 'rotateX(55deg)',
    zIndex: -2,
    '&:after': {
      content: '""',
      borderRadius: '50%',
      height: '40px',
      width: '40px',
      position: 'absolute',
      margin: '-13px 0 0 -13px',
      animation: '$pulsate 1s ease-out',
      animationIterationCount: 'infinite',
      opacity: 0,
      boxShadow: '0 0 1px 2px #00cae9',
      animationDelay: '1.1s'
    }
  }
}));

export default useStyles;