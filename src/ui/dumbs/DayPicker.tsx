import { GroupBox, NumberInput } from "react95";
import { Dayjs } from "dayjs";
import { useEffect, useState } from "react";
import { Cra, MonthChoose } from "../../domain/Cra";


const DayPicker = ({ chosenMonth }: { chosenMonth: MonthChoose }) => {
    const [craDay, setCraDay] = useState<Cra>(Cra.of(chosenMonth));

    /*
    const allDaysPicker = () => {
        const weeks = Math.ceil((lastDay.diff(firstDay, 'day') + 1) / 7);
        
        return Array.from(Array(weeks).keys()).map((week) => {
            const firstDayOfWeek = firstDay.add(week, 'week');
            const lastDayOfWeek = firstDayOfWeek.add(1, 'week');

            const daysPickerOfWeek = Array.from(Array(lastDayOfWeek.diff(firstDayOfWeek, 'day')).keys()).map((d) => {
                const day = firstDayOfWeek.add(d, 'day');

                if (day.month() !== actualMonth.month())
                    return;
                return <DayPicker.Day day={day}/>;
            });

            return <GroupBox label={`Week #${week + 1}`} style={{ width: 450 }}>
                {daysPickerOfWeek}
            </GroupBox>
        });
    };
    */
        
    return (
        <GroupBox style={{ display: 'flex', gap: 15, flexWrap: 'wrap', maxWidth: 1000 }}>
            {chosenMonth.month}
        </GroupBox>
    );
};

DayPicker.Day = ({ day }: { day: Dayjs}) => {

    const isWeekend = day.get('day') === 0 || day.get('day') === 6;

    const defaultValue = isWeekend ? 0 : 1;

    return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {day.utc(true).format('dddd DD/MM')}
        <NumberInput width={75} defaultValue={defaultValue}/>
    </div>);
};

export default DayPicker;