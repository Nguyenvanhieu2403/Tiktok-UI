import { useState, forwardRef } from 'react';
import classNames from 'classnames';
import images from '~/assets/images';
import Styles from './Image.module.scss';

const Image = forwardRef(({ className, src, alt, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleError = () => {
        setFallback(images.noImage);
    };

    return (
        <img
            className={classNames(Styles.wrapper, className)}
            ref={ref}
            src={fallback || src}
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
});

export default Image;
