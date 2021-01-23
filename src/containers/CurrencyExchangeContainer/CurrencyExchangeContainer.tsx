import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/state";
import {
    ChangeActionAC,
    ChangeCurrencyFieldAC,
    changeCurrentCurrencyAC,
    CurrencyTypeForCalc
} from "../../redux/currencyReducer";
import CurrencyExchange from "../../components/CurrencyExchange/CurrencyExchange";



export const CurrencyEContainer = () => {
    const dispatch = useDispatch()
    let currentCurrency = useSelector<RootStateType, string>(state => state.currency.currentCurrency)
    let mainCurrency = useSelector<RootStateType, string>(state => state.currency.mainCurrency)
    let amountOfBYN = useSelector<RootStateType, string>(state => state.currency.amountOfBYN)
    let amountOfCurrency = useSelector<RootStateType, string>(state => state.currency.amountOfCurrency)
    let isBuying = useSelector<RootStateType, boolean>(state => state.currency.isBuying)
    let currencies = useSelector<RootStateType, Array<CurrencyTypeForCalc>>(state => state.currency.currencies)
    let currencyRate: number = 0;
    const currenciesName = currencies.map((currency) => {
            if (currency.currencyName === currentCurrency) {
                currencyRate = isBuying ? currency.buyRate : currency.sellRate;
            }
            return currency.currencyName;
        })
    const changeCurrencyField = (e: React.ChangeEvent<HTMLInputElement>) => {
        let value = e.currentTarget.value;
        if (!isFinite(+value)) return;
        if (e.currentTarget.dataset.currency) {
            const trigger: string = e.currentTarget.dataset.currency;
            if (trigger === 'byn') {
                if (value === '') {
                    dispatch(ChangeCurrencyFieldAC(value, value))
                } else {
                    dispatch(ChangeCurrencyFieldAC(value,(+Number(value).toFixed(5) / currencyRate).toFixed(5)))
                }
            } else {
                if (value === '') {
                    dispatch(ChangeCurrencyFieldAC(value, value))
                } else {
                   dispatch(ChangeCurrencyFieldAC((+Number(value).toFixed(5) * currencyRate).toFixed(5), value))
                }
            }
        }
    }
    const changeAction = (e: React.MouseEvent<HTMLSpanElement>) => {
        e.currentTarget.dataset.action === 'buy'? dispatch(ChangeActionAC (true)) : dispatch(ChangeActionAC (false))
    }
    const changeCurrentCurrency = (e: React.MouseEvent<HTMLLIElement>) => {
      e.currentTarget.dataset.currency && dispatch(changeCurrentCurrencyAC(e.currentTarget.dataset.currency))
    }

    return (
            <CurrencyExchange
                currenciesName={currenciesName}
                currentCurrency={currentCurrency}
                currencyRate={currencyRate}
                isBuying={isBuying}
                amountOfBYN={amountOfBYN}
                amountOfCurrency={amountOfCurrency}
                changeCurrencyField={changeCurrencyField}
                changeAction={changeAction}
                changeCurrentCurrency={changeCurrentCurrency}
                mainCurrency={mainCurrency}
            />

    );
};
