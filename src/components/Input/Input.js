import React, { memo } from "react";

import classes from './Input.module.css';

export default memo(({ onChange }) => {
    return (
        <input
            onChange={(e) => onChange(e.target.value)}
            className={classes.root}
        />
    )
});
