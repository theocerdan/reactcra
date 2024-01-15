import { Window, WindowContent, WindowHeader } from "react95";
import MonthChooser from "../dumbs/MonthChooser";
import { useState } from "react";
import { MonthChoose } from "../../domain/Cra";
import DayPicker from "../dumbs/DayPicker";

const CraPicker = () => {
    const [chosenMonth, setChosenMonth] = useState<MonthChoose>(MonthChoose.actual());

    const handleMonthChange = (monthChose: MonthChoose) => {
        setChosenMonth(monthChose);
    }

    return (
        <Window>
            <WindowHeader>
                Choisir une date
            </WindowHeader>
            <WindowContent>
                <MonthChooser onSubmit={handleMonthChange} defaultChosenMonth={chosenMonth} />
                <DayPicker chosenMonth={chosenMonth} />
            </WindowContent>
        </Window>
    );
};

export default CraPicker;