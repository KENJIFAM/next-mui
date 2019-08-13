import createStyles from '@material-ui/core/styles/createStyles';
import makeStyles from '@material-ui/core/styles/makeStyles';
import {
  primaryColor,
  warningColor,
  dangerColor,
  successColor,
  infoColor,
  roseColor,
  grayColor,
  title
} from '../../styles/commonStyles';

const useStyles = makeStyles(() => createStyles({
  infoArea: {
    maxWidth: '360px',
    margin: '0 auto',
    padding: '0px'
  },
  iconWrapper: {
    float: 'left',
    marginTop: '24px',
    marginRight: '10px'
  },
  primary: {
    color: primaryColor
  },
  warning: {
    color: warningColor
  },
  danger: {
    color: dangerColor
  },
  success: {
    color: successColor
  },
  info: {
    color: infoColor
  },
  rose: {
    color: roseColor
  },
  gray: {
    color: grayColor
  },
  icon: {
    width: '36px',
    height: '36px'
  },
  descriptionWrapper: {
    color: grayColor,
    overflow: 'hidden'
  },
  title: {
    ...title,
    fontSize: '24px',
    fontWeight: 500
  },
  description: {
    color: '#666',
    overflow: 'hidden',
    marginTop: '0px',
    fontSize: '1rem',
    fontWeight: 300
  },
  iconWrapperVertical: {
    float: 'none'
  },
  iconVertical: {
    width: '61px',
    height: '61px'
  }
}));

export default useStyles;
