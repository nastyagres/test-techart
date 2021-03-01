import {memo} from "react";
import PropTypes from 'prop-types';

import classes from "./Screen.module.css";

const Screen = ({
    title,
    header,
    children,
    footer,
}) => {
    return (
        <div className={classes.root}>
            <div className={classes.name}>Калькулятор цены конструкций</div>
            <div className={classes.header}>
                {header}
            </div>
            <div className={classes.rootin}>
                <div className={classes.title}>
                    {title}
                </div>
                <div className={classes.home}>
                    {children}
                </div>
            </div>
            <div>
                {footer}
            </div>
        </div>
    )
};

Screen.propTypes = {
    title: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
    footer: PropTypes.node.isRequired,
};

export default memo(Screen);
