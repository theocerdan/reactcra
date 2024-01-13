import { Window, WindowContent, WindowHeader } from "react95";
import MonthChooser from "../dumbs/MonthChooser";

const DayPicker = () => {
    return (
        <Window>
            <WindowHeader>
                Choisir une date
            </WindowHeader>
            <WindowContent>
                <MonthChooser onSubmit={(data) => console.log(data)}/>
            </WindowContent>
        </Window>
    );
};

export default DayPicker;