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

export type CraDay = {
    day: Dayjs,
    value: number
}

const fillCraDay = (chosenMonth: MonthChoose): CraDay[] => {

    const actualMonth = dayjs().month(chosenMonth.month).year(chosenMonth.year);

    const firstDay = actualMonth.startOf('month');
    const lastDay = actualMonth.endOf('month');
    
    return Array.from(Array(lastDay.diff(firstDay, 'day')).keys()).map((d) => {
        const day = firstDay.clone();
        return { day: day.add(d, 'day'), value: 0 };
    });
}

export class Cra {

    private _days: CraDay[];

    private constructor() {
        this._days = [];
    }

    public static of(chosenMonth: MonthChoose): Cra {
        const cra = new Cra();
        cra._days = fillCraDay(chosenMonth);
        return cra;
    }

    get days(): CraDay[] {
        return this._days;
    }

}