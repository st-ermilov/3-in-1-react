import React from 'react';
import styles from '../../styles/components/exchange_panel.module.scss'
import {ActionCreatorWithPayload} from "@reduxjs/toolkit";
import {useAppDispatch} from "../../hooks/rtk-hooks";
import {setFirstInputCurrency, setSecondInputCurrency} from "../../redux/slices/exchangeSlice";


type currency = {
    id: string,
    title: string
}
type typeProps = {
    value: number
    onChangeValue: (value: number) => void
    currency: string
    setCurrency: ActionCreatorWithPayload<string>
}
const ExchangePanel: React.FC<typeProps> = ({value, currency, setCurrency, onChangeValue}) => {
    const dispatch = useAppDispatch()

    const currencyName: currency[] = [
        {id: "1", title: 'RUB'},
        {id: "2", title: 'USD'},
        {id: "3", title: 'EUR'},
        {id: "4", title: 'CNY'}
    ]

    return (
        <div className={styles.container}>
            <ul className={styles.currency_names}>
                {currencyName.map((item) => <li
                    key={item.id}
                    className={currency === item.title ? styles.currency_name_active : styles.currency_name}
                    onClick={() => {
                        dispatch(setCurrency(item.title))
                    }}>
                    {item.title}
                </li>)}
            </ul>
            <form>
                <input value={value} onChange={(e) => {
                    const inputValue = +e.target.value
                    onChangeValue(inputValue)
                }}/>
                <button type='button' onClick={() => {
                    dispatch(setFirstInputCurrency(0))
                    dispatch(setSecondInputCurrency(0))
                }}>Clear
                </button>
            </form>
        </div>
    );
};

export default ExchangePanel;