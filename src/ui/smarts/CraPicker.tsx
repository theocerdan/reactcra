import { Window, WindowContent, WindowHeader } from "react95";
import MonthChooser from "../dumbs/MonthChooser";
import { MonthChoose } from "../../domain/Cra";
import DayPicker from "../dumbs/DayPicker";
import {useCraStore} from "../store/craStore.ts";

const CraPicker = () => {
   const { choosenMonth, changeMonth } = useCraStore();

    const handleMonthChange = (monthChose: MonthChoose) => {
        changeMonth(monthChose);
    }

    return (
        <Window>
            <WindowHeader>
                Choisir une date
            </WindowHeader>
            <WindowContent>
                <MonthChooser onSubmit={handleMonthChange} defaultChoosenMonth={choosenMonth} />
                <DayPicker choosenMonth={choosenMonth} />
            </WindowContent>
        </Window>
    );
};

export default CraPicker;