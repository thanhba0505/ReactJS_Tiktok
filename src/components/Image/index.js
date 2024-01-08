import { useState, forwardRef } from 'react';
import images from '~/asset/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

const Image = forwardRef(({ src, alt, className, fallBack: customFallBack = images.noImage, ...props }, ref) => {
  const [fallBack, setFallBack] = useState('');

  const handleError = () => {
    setFallBack(customFallBack);
  };

  return (
    <img
      className={classNames(styles.wrapper, className)}
      ref={ref}
      {...props}
      alt={alt}
      src={fallBack || src}
      onError={handleError}
    />
  );
});

export default Image;
