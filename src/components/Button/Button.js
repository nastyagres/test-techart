import React, {memo} from 'react';
import cn from "classnames";
import classes from './Button.module.css';


export default memo(({
     children,
     onClick,
     className,
     ...rest
}) => {
    return (
        <button onClick={onClick} {...rest} className={cn(classes.button, className)}>
            {children}
        </button>
    )
});
