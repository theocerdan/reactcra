import { GroupBox, NumberInput } from "react95";
import { Dayjs } from "dayjs";
import { Cra } from "../../domain/Cra.tsx";


const DayPicker = ({ cra, onChange }: { cra: Cra, onChange: (day: Dayjs, value: number) => void }) => {

    const onDayHoursChange = (day: Dayjs, value: number) => {
        //onChange(day, value);
    }

    const numberOfWeek = Math.ceil(cra.days.length / 7);

    const daysByWeekIndex = (weekIndex: number) => {
        const start = weekIndex * 7;
        const end = start + 7;
        return cra.days.slice(start, end);
    }

    const Week = ({ weekIndex }: { weekIndex: number }) => {
            return <GroupBox label={`Week #${weekIndex + 1}`} style={{ width: 450 }}>
                {daysByWeekIndex(weekIndex).map((day) => (
                    <DayPicker.Day day={day.day} onChange={onDayHoursChange} />
                ))}
            </GroupBox>
    };

    const AllWeeks = () => {
        return Array.from(Array(numberOfWeek).keys()).map((weekIndex) => (
                <Week weekIndex={weekIndex} />
            ))
    }
        
    return (
        <GroupBox style={{ display: 'flex', gap: 15, flexWrap: 'wrap', maxWidth: 1000 }}>
            <AllWeeks />
        </GroupBox>
    );
};

DayPicker.Day = ({ day, onChange }: { day: Dayjs, onChange: (day: Dayjs, value: number) => void }) => {

    const isWeekend = day.get('day') === 0 || day.get('day') === 6;

    const defaultValue = isWeekend ? 0 : 1;

    const handleValueChange = (value: number) => {
        onChange(day, value);
    }

    return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        {day.format('dddd DD/MM/YYYY')}
        <NumberInput width={75} defaultValue={defaultValue} onChange={handleValueChange}/>
    </div>);
};

export default DayPicker;