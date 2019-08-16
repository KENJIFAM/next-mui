import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Menu from '@material-ui/icons/Menu';
import useStyles from './useStyles';
import Link from '../Link';

interface OwnProps {
  color?: Color;
  rightLinks?: React.ReactNode;
  leftLinks?: React.ReactNode;
  brand?: React.ReactNode;
  fixed?: boolean;
  absolute?: boolean;
  changeColorOnScroll?: {
    height: number,
    color: Color
  };
}

type Color = 'primary' | 'info' | 'success' | 'warning' | 'danger' |
'transparent' | 'white' | 'rose' | 'dark';

type Props = OwnProps;

const Navbar: React.FC<Props> = props => {
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const { color = 'white', rightLinks, leftLinks, brand, fixed, absolute } = props;
  const classes = useStyles();
  const appBarClasses = clsx({
    [classes.appBar]: true,
    [classes[color]]: color,
    [classes.absolute]: absolute,
    [classes.fixed]: fixed
  });

  const handleDrawerToggle = () => setMobileOpen(!mobileOpen);

  const removeClassColor = (colorClass: Color) => document.body
    .getElementsByTagName('header')[0]
    .classList.remove(classes[colorClass]);

  const addClassColor = (colorClass: Color) => document.body
    .getElementsByTagName('header')[0]
    .classList.add(classes[colorClass]);
  
  const headerColorChange = () => {
    const { changeColorOnScroll } = props;
    const windowsScrollTop = window.pageYOffset;
    if (windowsScrollTop > changeColorOnScroll!.height) {
      removeClassColor(color);
      addClassColor(changeColorOnScroll!.color);
    } else {
      removeClassColor(changeColorOnScroll!.color);
      addClassColor(color);
    }
  };

  useEffect(() => {
    if (!props.changeColorOnScroll) {
      return;
    }
    window.addEventListener('scroll', headerColorChange);
    return () => window.removeEventListener('scroll', headerColorChange);
  }, []);

  const brandComponent = (
    <Button className={classes.title}>
      <Link className={classes.link} href="/">{brand} </Link>
    </Button>
  );
  
  return (
    <AppBar className={appBarClasses}>
      <Toolbar className={classes.container}>
        {leftLinks !== undefined ? brandComponent : null}
        <div className={classes.flex}>
          {leftLinks !== undefined ? (
            <Hidden smDown implementation="css">
              {leftLinks}
            </Hidden>
          ) : (
            brandComponent
          )}
        </div>
        <Hidden smDown implementation="css">
          {rightLinks}
        </Hidden>
        <Hidden mdUp>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>
      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={'right'}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper
          }}
          onClose={handleDrawerToggle}
        >
          <div className={classes.appResponsive}>
            {leftLinks}
            {rightLinks}
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

export default Navbar;
