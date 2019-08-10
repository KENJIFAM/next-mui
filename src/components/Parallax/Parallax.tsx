import React, { useState, useEffect } from 'react';
import clsx from 'clsx';
import useStyles from './useStyles';

interface OwnProps {
  filter?: boolean;
  style?: object;
  image: string;
  small?: boolean;
  className?: string;
}

type Props = OwnProps;

const Parallax: React.FC<Props> = props => {
  const [transform, setTransform] = useState<string>('');
  const { filter, style, image, small, className = '', children } = props;
  const classes = useStyles();
  const parallaxClasses = clsx({
    [classes.parallax]: true,
    [classes.filter]: filter,
    [classes.small]: small,
    [className]: className !== undefined
  });

  const resetTransform = () => {
    const windowScrollTop = window.pageYOffset / 3;
    setTransform('translate3d(0,' + windowScrollTop + 'px,0)');
  };

  useEffect(() => {
    const windowScrollTop = window.pageYOffset / 3;
    setTransform('translate3d(0,' + windowScrollTop + 'px,0)');
    window.addEventListener('scroll', resetTransform);
    return () => window.removeEventListener('scroll', resetTransform);
  }, []);    
   
  return (
    <div
      className={parallaxClasses}
      style={{
        ...style,
        backgroundImage: 'url(' + image + ')',
        transform
      }}
    >
      {children}
    </div>
  );
};

export default Parallax;
