import {Button, Window, WindowContent, WindowHeader} from "react95";
import MonthChooser from "../dumbs/MonthChooser";
import { MonthChoose } from "../../domain/Cra";
import DayPicker from "../dumbs/DayPicker";
import {useCraStore} from "../store/craStore.ts";
import {Dayjs} from "dayjs";

const CraPicker = () => {
   const { choosenMonth, changeMonth, cra, changeCra } = useCraStore();

    const handleMonthChange = (monthChose: MonthChoose) => {
        changeMonth(monthChose);
    }

    const handleCraDayChange = (day: Dayjs, value: number) => {
        //const newCra = cra!.changeDayValue(day, value);
        //changeCra(newCra);
    }

    return (
        <Window>
            <WindowHeader>
                Choisir une date
            </WindowHeader>
            <WindowContent>
                <div style={{ display: 'flex', gap: 10}}>
                    <MonthChooser onSubmit={handleMonthChange} defaultChoosenMonth={choosenMonth} />
                    <Button variant="flat">Tout remplir</Button>
                    <Button variant="flat">Tout déremplir</Button>
                </div>
                {cra && <DayPicker cra={cra} onChange={handleCraDayChange}/>}
            </WindowContent>
        </Window>
    );
};

export default CraPicker;