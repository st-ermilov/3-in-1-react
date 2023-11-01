import {createSlice, PayloadAction} from "@reduxjs/toolkit";


type typeInitialState = {
    firstSelectedCurrency: string,
    secondSelectedCurrency: string,
    firstInputCurrency: number,
    secondInputCurrency: number
}
const initialState: typeInitialState = {
    firstSelectedCurrency: 'USD',
    secondSelectedCurrency: 'RUB',
    firstInputCurrency: 1,
    secondInputCurrency: 0
}


const exchangeSlice = createSlice({
    name: 'exchange',
    initialState,
    reducers: {
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
    setSecondInputCurrency
} = exchangeSlice.actions

export default exchangeSlice.reducer