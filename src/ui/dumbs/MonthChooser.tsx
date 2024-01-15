import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Select } from "react95";
import { SelectOption } from "react95/dist/Select/Select.types";
import { MonthChoose } from "../../domain/Cra";

const MAX_MONTHS = 12;
const YEARS_RANGE = 3;

const actualYears = dayjs().year();

const allMonths = Array.from(Array(MAX_MONTHS).keys()).map((month) => {
    return { value: month, label: dayjs().month(month).format('MMMM') };
});

const allYears = () => {
    const startYear = actualYears - YEARS_RANGE;
    const endYear = actualYears + YEARS_RANGE;

    return Array.from(Array(endYear - startYear).keys()).map((year) => {
        return { value: year, label: Number.parseInt(dayjs().year(startYear + year).format('YYYY')) };
    });
};

const MonthChooser = ({ onSubmit, defaultChosenMonth }: { onSubmit: (monthChose: MonthChoose) => void, defaultChosenMonth: MonthChoose }) => {

    const [selectedMonth, setSelectedMonth] = useState<MonthChoose>(defaultChosenMonth);

    useEffect(() => {
        onSubmit(selectedMonth);
    }, [selectedMonth]);

    const defaultMonthIndex = defaultChosenMonth.month;
    const defaultYearsIndex = allYears().findIndex((year) => year.label === defaultChosenMonth.year);
    
    const onYearChange = ((selectedOption: SelectOption<number>) => {
        console.log("selectedOption: ", selectedOption)
        setSelectedMonth({ ...selectedMonth, year: Number.parseInt(selectedOption.label!) });
    });

    const onMonthChange = ((selectedOption: SelectOption<number>) => {
        setSelectedMonth({ ...selectedMonth, month: selectedOption.value });
    });

    return (
        <div style={{ display: 'flex', gap: 5 }}>
            <Select
                defaultValue={defaultMonthIndex}
                options={allMonths}
                menuMaxHeight={160}
                width={160}
                onChange={onMonthChange}
            />
            <Select
                defaultValue={defaultYearsIndex}
                options={allYears()}
                menuMaxHeight={160}
                width={160}
                onChange={onYearChange}
            />
        </div>
    );
};

export default MonthChooser;