import React, {memo} from "react";
import PropTypes from 'prop-types';
import cn from 'classnames';

import Button from "../../../../components/Button/Button";
import Screen from "../Screen";
import classes from "./Status.module.css";

const Status = ({
     message,
     onCancel,
     result,
}) => {
    return (
        <Screen
            title={result === 'ok' ? 'Успешно' : 'Ошибка'}
            header="Результат расчета"
            footer={(
                <Button onClick={onCancel}>
                    Новый расчет
                </Button>
            )}
        >
            <div className={cn(classes.status, {
                [classes.success]: result === 'ok',
                [classes.error]: result !== 'ok',
            })}>
                {message}
            </div>
        </Screen>
    )
};

Status.propTypes = {
    message: PropTypes.string.isRequired,
    onCancel: PropTypes.func.isRequired,
    result: PropTypes.string.isRequired,
}

export default memo(Status);
