import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../redux/state";
import {CurrencyType,  getCurrencyTC, setFavoritesAC} from "../../redux/currencyRatesReducer";
import cl from './CurrencyRates.module.css'

const CurrencyRates = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCurrencyTC())
    }, [dispatch])
    let currencyItems = useSelector<RootStateType, Array<CurrencyType>>(state => state.currencyRates.items)
    let [buy, setBuy] = useState<boolean>(false)
    const onBuy = () => {
        setBuy(!buy)
        if (sale) {
            setSale(!sale)
        }
    }
    let [sale, setSale] = useState<boolean>(false)
    const onSale = () => {
        setSale(!sale)
        if (buy) {
            setBuy(!buy)
        }
    }
    let favorites = useSelector<RootStateType,Array<string>>(state => state.currencyRates.names)

    return (
        <div className={cl.center}>
            <div>
                <p>favorites:{ favorites.map((i,index)=><span key={`{i.name}+ {index}`}>{i} ,</span>)}</p>
            </div>
            <div className={cl.wrap}>
                <div className={cl.blockLeft}>
                    <p>currency: </p>
                    <p style={{paddingTop: '22px'}}>exchange: </p>
                </div>
                {currencyItems.map((i, index) => {
                    const onSetFav = (e: React.MouseEvent<HTMLParagraphElement>) => {
                        dispatch(setFavoritesAC(e.currentTarget.innerText))
                        debugger
                        console.log(e.currentTarget.innerText)
                    }
                    return (
                        <div key={index} className={cl.item}>
                        <div className={cl.wrapCurrency}>
                            <p className={cl.first}>{i.base_ccy} </p>
                            <p className={cl.next} onClick={onSetFav}>{i.ccy}</p>
                        </div>
                        <div className={cl.wrapNum}>
                            <p className={buy ? cl.light : cl.any}>{i.buy}</p>
                            <p className={sale ? cl.dark : cl.any}>{i.sale}</p>
                        </div>
                    </div>)
                })}
            </div>
            <div>
                <button className={cl.light} onClick={onBuy}>buy</button>
                <button className={cl.dark} onClick={onSale}>sale</button>
            </div>
        </div>
    );
};

export default CurrencyRates;