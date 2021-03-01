export const getSteps = (values) => [
    {
        title: 'Что будем строить?',
        type: 'options',
        name: 'building',
        options: [
            { label: 'Жилой дом', value: 1},
            { label: 'Гараж', value: 2},
        ]
    },
    values.building === 1 && {
        title: 'Количество этажей (число)',
        type: 'input',
        name: 'height',
    },
    {
        title: 'Материал стен:',
        type: 'options',
        name: 'material',
        options: [
            { label: 'Кирпич', value: 1, houseOnly: true },
            { label: 'Шлакоблок', value: 2},
            { label: 'Деревянный брус', value: 3, houseOnly: true},
            { label: 'Металл', value: 4, garageOnly: true},
            { label: 'Сендвич-панели', value: 5, garageOnly: true},
        ].filter(({ houseOnly, garageOnly }) => {
            return values.building === 2 ? !houseOnly : !garageOnly
        })
    },
    {
        title: 'Длинна стен(в метрах):',
        type: 'double-input',
        name1: 'sizex',
        name2: 'sizey',
    },
].filter(Boolean);
