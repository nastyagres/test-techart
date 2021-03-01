import React, { memo, useState, useCallback, useMemo } from "react";
import qs from 'query-string';

import Status from "./components/Status";
import Step from "./components/Step";
import { getSteps } from './helpers';

export default () => {
    const [current, setCurrent] = useState(0);
    const [values, setValues] = useState({});
    const [result, setResult] = useState();
    const [loading, setLoading] = useState(false);

    const steps = useMemo(() => getSteps(values), [values]);

    const handleNextStep = useCallback((skip) => {
        setCurrent(current + (skip === true ? 2 : 1));
    }, [setCurrent, current]);

    const handleCancel = useCallback(() => {
        setCurrent(0);
        setValues({});
        setResult();
    }, [setCurrent]);

    const handleChangeValue = useCallback((key, value) => {
        setValues({
            ...values,
            [key]: value,
        });
    }, [setValues, values]);

    const handleSubmit = useCallback(async () => {
        setLoading(true);
        const req = await fetch(`https://data.techart.ru/lab/json/?${qs.stringify(values)}`);
        const result = await req.json();
        setResult(result);
        setLoading(false);
    }, [values, setResult]);

    return (
        <div>
            {
                result
                && (
                    <Status
                        result={result.result}
                        message={result.message}
                        onCancel={handleCancel}
                    />
                )
            }
            {
                !result
                && (
                    <Step
                        {...steps[current]}
                        index={current + 1}
                        lastStep={current === steps.length - 1}
                        onCancel={handleCancel}
                        onNextStep={handleNextStep}
                        onChange={handleChangeValue}
                        onSubmit={handleSubmit}
                        disabledNext={loading}
                        result={result}
                    />
                )
            }
        </div>
    )
}
