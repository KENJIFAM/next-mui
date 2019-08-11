import * as React from 'react';

import Typography from '@material-ui/core/Typography';
import Link from '../Link';

const Footer: React.FC = () => {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Step Out
      </Link>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
};

export default Footer;