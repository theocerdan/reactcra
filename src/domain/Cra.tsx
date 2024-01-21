import dayjs, { Dayjs } from "dayjs";

export class MonthChoose {
    month: number;
    year: number;

    private constructor(month: number, year: number) {
        this.month = month;
        this.year = year;
    }

    public static of(month: number, year: number): MonthChoose {
        return new MonthChoose(month, year);
    }

    public static actual(): MonthChoose {
        return MonthChoose.of(dayjs().month(), dayjs().year());
    }
}

export class CraDay {
    private _day: Dayjs;
    private _value: number;

    private constructor(day: Dayjs, value: number) {
        this._day = day;
        this._value = value;
    }

    public static of(day: Dayjs): CraDay {
        const value = this.isWorkingDay(day) ? 1 : 0;
        return new CraDay(day, value);
    }

    public static isWorkingDay(day: Dayjs): boolean {
        return day.day() !== 0 && day.day() !== 6;
    }

    get day(): Dayjs {
        return this._day;
    }
    get value(): number {
        return this._value;
    }

    public changeValue = (value: number): CraDay => {
        return new CraDay(this._day, value);
    }

}

export class Cra {

    private _days: CraDay[];

    private constructor(days: CraDay[]) {
        this._days = days;
    }

    public static of(chosenMonth: MonthChoose): Cra {
        const cra = new Cra([]);
        cra.fillCraDay(chosenMonth);
        return cra;
    }

    get days(): CraDay[] {
        return this._days;
    }

    get workingDays(): CraDay[] {
        return this._days.filter((d) => d.day.day() !== 0 && d.day.day() !== 6);
    }

    public fillCraDay = (chosenMonth: MonthChoose) => {
        const actualMonth = dayjs().month(chosenMonth.month).year(chosenMonth.year);

        const firstDay = actualMonth.startOf('month');
        const lastDay = actualMonth.endOf('month');

        this._days = Array.from(Array(lastDay.diff(firstDay, 'day') + 1).keys()).map((d) => {
            const day = firstDay.clone();
            return CraDay.of(day.add(d, 'day'));
        });
    }

    public countAllValues = (): number => {
        return this._days.reduce((acc, day) => acc + day.value, 0);
    }

    public changeDayValue(day: Dayjs, value: number): Cra {
        const newDays = this._days.map((d) => {
            if (d.day.isSame(day)) {
                return CraDay.of(day).changeValue(value);
            }
            return d;
        });
        return new Cra(newDays);
    }

}