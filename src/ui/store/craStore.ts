import { create } from 'zustand'
import {Cra, MonthChoose} from "../../domain/Cra.tsx";

interface CraStore {
    choosenMonth: MonthChoose
    changeMonth: (newMonth: MonthChoose) => void
    cra: Cra | undefined,
    changeCra: (newCra: Cra) => void
}

export const useCraStore = create<CraStore>()((set) => ({
    choosenMonth: { month: 11, year: 2023 },
    cra: undefined,
    changeMonth: (newMonth: MonthChoose) => set({ choosenMonth: newMonth, cra : Cra.of(newMonth) }),
    changeCra: (newCra: Cra) => set({ cra: newCra }),
}))


