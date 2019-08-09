import React from 'react';
import Link from '../Link';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import useStyles from './useStyles';

const NavbarLinks: React.FC = () => {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <Button className={classes.navLink}>
          <Link className={classes.link} href="/">Home</Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button className={classes.navLink}>
          <Link className={classes.link} href="/pricing">Plans & Pricing</Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button className={classes.navLink}>
          <Link className={classes.link} href="/booking">Book Online</Link>
        </Button>
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button className={classes.navLink}>
          <Link className={classes.link} href="/blog">Blog</Link>
        </Button>
      </ListItem>
    </List>
  );
};

export default NavbarLinks;
