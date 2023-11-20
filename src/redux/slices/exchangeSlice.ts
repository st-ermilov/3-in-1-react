import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {typeRatesRefCurrent} from "../../pages/ExchangePage";


type typeInitialState = {
    firstSelectedCurrency: string,
    secondSelectedCurrency: string,
    firstInputCurrency: number,
    secondInputCurrency: number
    dataExchange: typeRatesRefCurrent
}
const initialState: typeInitialState = {
    firstSelectedCurrency: 'RUB',
    secondSelectedCurrency: 'RUB',
    firstInputCurrency: 0,
    secondInputCurrency: 0,
    dataExchange: {
        AUD: 0,
        BGN: 0,
        BRL: 0,
        CAD: 0,
        CHF: 0,
        CNY: 0,
        CZK: 0,
        DKK: 0,
        EUR: 0,
        GBP: 0,
        HKD: 0,
        HRK: 0,
        HUF: 0,
        IDR: 0,
        ILS: 0,
        INR: 0,
        ISK: 0,
        JPY: 0,
        KRW: 0,
        MXN: 0,
        MYR: 0,
        NOK: 0,
        NZD: 0,
        PHP: 0,
        PLN: 0,
        RON: 0,
        RUB: 0,
        SEK: 0,
        SGD: 0,
        THB: 0,
        TRY: 0,
        USD: 0,
        ZAR: 0,
    }
}


const exchangeSlice = createSlice({
    name: 'exchange',
    initialState,
    reducers: {
        setDataExchange: (state, action: PayloadAction<typeRatesRefCurrent>) => {
            state.dataExchange = action.payload
        },
        setFirstSelectedCurrency: (state, action: PayloadAction<string>) => {
            state.firstSelectedCurrency = action.payload
        },
        setSecondSelectedCurrency: (state, action: PayloadAction<string>) => {
            state.secondSelectedCurrency = action.payload
        },
        setFirstInputCurrency: (state, action: PayloadAction<number>) => {
            state.firstInputCurrency = action.payload
        },
        setSecondInputCurrency: (state, action: PayloadAction<number>) => {
            state.secondInputCurrency = action.payload
        }
    }
})

export const {
    setFirstSelectedCurrency,
    setSecondSelectedCurrency,
    setFirstInputCurrency,
    setSecondInputCurrency,
    setDataExchange
} = exchangeSlice.actions

export default exchangeSlice.reducer