import React from 'react';
import BackButton from "../components/Common/BackButton";
import styles from '../styles/pages/exchange.module.scss'
import ExchangePanel from "../components/Exchange/ExchangePanel";
import {useAppDispatch, useAppSelector} from "../hooks/rtk-hooks";
import axios from "axios";
import {
    setFirstInputCurrency,
    setFirstSelectedCurrency,
    setSecondInputCurrency,
    setSecondSelectedCurrency
} from "../redux/slices/exchangeSlice";


type typeRatesRefCurrent = {
    current: {
        [key: string]: number,
    }
}

const ExchangePage = () => {
    const dispatch = useAppDispatch()
    const ratesRef: React.MutableRefObject<typeRatesRefCurrent> = React.useRef({
        current: {
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
    })

    const {
        firstSelectedCurrency,
        secondSelectedCurrency,
        firstInputCurrency,
        secondInputCurrency
    } = useAppSelector(state => state.exchange)


    React.useEffect(() => {
        const getCurrency = async () => {
            const {data} = await axios.get('https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_eAEw9g5Gwog9IhV6ea7EOKWz0zO4Clq5hYgEfL2t')
            ratesRef.current = data.data
            onChangeFirstInput(1)
        }
        getCurrency()
    }, [])


    const onChangeFirstInput = (value: number) => {
        if (!isNaN(value)) {
            dispatch(setFirstInputCurrency(value))
        } else {
            dispatch(setFirstInputCurrency(0))
        }
        const price = value / ratesRef.current[firstSelectedCurrency]
        const result = price * ratesRef.current[secondSelectedCurrency]
        dispatch(setSecondInputCurrency(+result.toFixed(2)))
    }
    const onChangeSecondInput = (value: number) => {
        if (!isNaN(value)) {
            dispatch(setSecondInputCurrency(value))
        } else {
            dispatch(setSecondInputCurrency(0))
        }
        const price = value / ratesRef.current[secondSelectedCurrency]
        const result = price * ratesRef.current[firstSelectedCurrency]
        dispatch(setFirstInputCurrency(+result.toFixed(2)))
    }


    React.useEffect(() => {
        onChangeFirstInput(firstInputCurrency)
    }, [firstSelectedCurrency])

    React.useEffect(() => {
        onChangeSecondInput(secondInputCurrency)
    }, [secondSelectedCurrency])

    return (
        <div className={styles.container}>
            <BackButton/>
            <ExchangePanel value={firstInputCurrency}
                           onChangeValue={onChangeFirstInput}
                           currency={firstSelectedCurrency}
                           setCurrency={setFirstSelectedCurrency}

            />
            <ExchangePanel value={secondInputCurrency}
                           onChangeValue={onChangeSecondInput}
                           currency={secondSelectedCurrency}
                           setCurrency={setSecondSelectedCurrency}
            />
        </div>
    );
};

export default ExchangePage;