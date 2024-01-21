import {GroupBox, Table, TableBody, TableDataCell, TableRow} from "react95";

export const ResultTable = ({ workingDay, valueCount, tjm }: { workingDay: number, valueCount: number, tjm: number }) => {

    const total = workingDay * tjm;

    return (
        <GroupBox>
            <Table>
                <TableBody>
                    <ResultTableRow icon={"👨‍💻"} label={"Jours travaillés ce mois ci"} value={valueCount}/>
                    <ResultTableRow icon={"🗓️"} label={"Jours ouvrés dans le mois"} value={workingDay}/>
                    <ResultTableRow icon={"💰"} label={"Total de chiffre d'affaire"} value={formatEuro(total)}/>
                </TableBody>
            </Table>
        </GroupBox>
    );
}

const ResultTableRow = ({ icon, label, value } : { icon: string, label: string, value: string | number }) => {
    return (
        <TableRow>
            <TableDataCell>{icon}</TableDataCell>
            <TableDataCell>{label}</TableDataCell>
            <TableDataCell>{value}</TableDataCell>
        </TableRow>
    );
}

const formatEuro = (value: number) => {
    return value.toLocaleString('fr-FR', { style: 'currency', currency: 'EUR' });
}