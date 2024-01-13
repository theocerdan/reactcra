import dayjs from "dayjs";
import { useEffect, useState } from "react";
import { Select } from "react95";
import { SelectOption } from "react95/dist/Select/Select.types";

const MAX_MONTHS = 12;
const YEARS_RANGE = 3;

export type MonthChoose = {
    month: number;
    year: number;
}

const actualYears = dayjs().year();
const actualMonth = dayjs().month();

const allMonths = Array.from(Array(MAX_MONTHS).keys()).map((month) => {
    return { value: month, label: dayjs().month(month).format('MMMM') };
});

const allYears = () => {
    const startYear = actualYears - YEARS_RANGE;
    const endYear = actualYears + YEARS_RANGE;

    return Array.from(Array(endYear - startYear).keys()).map((year) => {
        return { value: year, label: dayjs().year(startYear + year).format('YYYY') };
    });
};

const MonthChooser = ({ onSubmit }: { onSubmit: (monthChose: MonthChoose) => void }) => {

    const [selectedMonth, setSelectedMonth] = useState<MonthChoose>({ month: actualMonth, year: actualYears });

    useEffect(() => {
        onSubmit(selectedMonth);
    }, [selectedMonth]);


    const onYearChange = ((selectedOption: SelectOption<number>) => {
        setSelectedMonth({ ...selectedMonth, year: Number.parseInt(selectedOption.label!) });
    });

    const onMonthChange = ((selectedOption: SelectOption<number>) => {
        setSelectedMonth({ ...selectedMonth, month: selectedOption.value });
    });

    return (
        <div style={{ display: 'flex', gap: 5 }}>
            <Select
                defaultValue={0}
                options={allMonths}
                menuMaxHeight={160}
                width={160}
                onChange={onMonthChange}
            />
            <Select
                defaultValue={2}
                options={allYears()}
                menuMaxHeight={160}
                width={160}
                onChange={onYearChange}
            />
        </div>
    );
};

export default MonthChooser;