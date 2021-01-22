import React from 'react';
import cl from './CurrencyExchange.module.css'

type CurrencyExchangePropsType = {
    currenciesName: string[];
    currentCurrency: string;
    mainCurrency: string;
    currencyRate: number;
    isBuying: boolean;
    amountOfBYN: string;
    amountOfCurrency: string;
    changeCurrencyField: (e: React.ChangeEvent<HTMLInputElement>) => void;
    changeAction: (e: React.MouseEvent<HTMLSpanElement>) => void;
    changeCurrentCurrency: (e: React.MouseEvent<HTMLLIElement>) => void;
};
const CurrencyExchange: React.FunctionComponent<CurrencyExchangePropsType> = (
    {currenciesName, currentCurrency,mainCurrency, currencyRate, isBuying, amountOfBYN, amountOfCurrency, changeCurrencyField, changeAction, changeCurrentCurrency,}
) => {

    const viewCurrency = isBuying ? (
        <>
            <label>
                {' '}
                You give the next amount of UAH :
                <input value={amountOfBYN} data-currency="byn" onChange={changeCurrencyField}/>
            </label><br/>
            <label>
                {' '}
                You get the next amount of {currentCurrency}:
                <input value={amountOfCurrency} data-currency="currency" onChange={changeCurrencyField}/>
            </label>
        </>
    ) : (
        <>
            <label>
                {' '}
                You give the next amount of {currentCurrency}:
                <input value={amountOfCurrency} data-currency="currency" onChange={changeCurrencyField}/>
            </label><br/>
            <label>
                {' '}
                You get the next amount of UAH :
                <input value={amountOfBYN} data-currency="byn" onChange={changeCurrencyField}/>
            </label>
        </>
    );
    // debugger
    return (
        <div className={cl.container}>
            <div className={cl.currency}>
                <h2>Currency exchange</h2>
                <div className={cl.currencyNames}>
                    <p>Current currency:</p>
                    <ul>
                        {currenciesName.map((currency: string, index: number) => {
                            return (
                                <li
                                    key={`${index}-${currency}`}
                                    className={`cl.currencies ${currentCurrency === currency ? 'cl.activeCurrency' : null}`}
                                    onClick={changeCurrentCurrency}
                                    data-currency={currency}
                                >
                                    {currency}
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className={cl.currencyAction}>
                    <span className={isBuying ? `${cl.active}` : ''} data-action="buy" onClick={changeAction}>
                      Buy
                    </span>
                    <span className={isBuying ? '' : `${cl.active}`} data-action="sell" onClick={changeAction}>
                      Sell
                    </span>
                </div>
                <div className="fields">
                    <p>Currency rate: {currencyRate}</p>
                    {viewCurrency}
                </div>
            </div>
        </div>
    );
};

export default CurrencyExchange;
