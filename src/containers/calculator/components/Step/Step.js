import React, {memo} from "react";
import PropTypes from 'prop-types';
import Button from "../../../../components/Button/Button";
import Input from "../../../../components/Input/Input";
import Screen from "../Screen";
import classes from "./Step.module.css";

const Step = ({
     title,
     index,
     type,
     options,
     name,
     name1,
     name2,
     lastStep,
     disabledNext,
     onCancel,
     onNextStep,
     onChange,
     onSubmit,
 }) => {
    return (
        <Screen
            title={title}
            header={`Шаг ${index}`}
            footer={(
                <>
                    <Button onClick={onCancel}>
                        Отмена
                    </Button>
                    <Button
                        // не даем нажимать на кнопку когда отправляется запрос
                        // и когда тип контрола - опции. при опциях перед только по
                        // нажатию на опцию
                        disabled={disabledNext || type === 'options'}
                        onClick={lastStep ? onSubmit : onNextStep}
                        className={classes.rightButton}
                    >
                        {lastStep ? 'Рассчитать' : 'Далее'}
                    </Button>
                </>
            )}
        >
            {
                type === 'options' && options
                && (
                    <ul>
                        {
                            options.map((option) => (
                                <li className={classes.option} key={option.value}>
                                    <a
                                        href="#"
                                        onClick={(e) => {
                                            if (e.preventDefault) {
                                                e.preventDefault();
                                            }
                                            onChange(name, option.value);
                                            onNextStep()
                                        }}
                                    >
                                        {option.label}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                )
            }
            {
                type === 'input'
                && (
                    <Input onChange={(val) => onChange(name, val)}/>
                )
            }
            {
                type === 'double-input'
                && (
                    <div className={classes.flex}>
                        <Input onChange={(val) => onChange(name1, val)}/>
                        <div className={classes.x}>X</div>
                        <Input onChange={(val) => onChange(name2, val)}/>
                    </div>
                )
            }
        </Screen>
    )
};

Step.propTypes = {
    title: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    type: PropTypes.oneOf(['options', 'input', 'double-input']),
    options: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.number,
    })),
    name: PropTypes.string,
    name1: PropTypes.string,
    name2: PropTypes.string,
    lastStep: PropTypes.bool,
    disabledNext: PropTypes.bool,
    onCancel: PropTypes.func.isRequired,
    onNextStep: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
}

export default memo(Step);
