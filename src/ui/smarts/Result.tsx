import {Window, WindowContent, WindowHeader} from "react95";
import {ResultTable} from "../dumbs/ResultTable.tsx";
import {useCraStore} from "../store/craStore.ts";

export const Result = () => {
    const { cra } = useCraStore();

    if (!cra) {
        return null;
    }

    return (
        <Window style={{ width: '500px' }}>
            <WindowHeader>
                Resultat
            </WindowHeader>
            <WindowContent>
                <ResultTable tjm={400} workingDay={cra.days.length} valueCount={cra.countAllValues()}/>
            </WindowContent>
        </Window>
    );
}