import {Dispatch} from "redux";
import {Currency} from "./Api";
import {CurrencyTypeForCalc, getCurrencyForCalcAC, getStartMainCurrencyAC} from "./currencyReducer";

export type CurrencyType = {
  ccy:string
  base_ccy: string
  buy: number
  sale: number
};
type initialStateType={
  items: Array<CurrencyType>
  names: Array<string>
}
export type GetCurrencyACType = ReturnType<typeof getCurrencyAC>
export type setFavoritesACType = ReturnType<typeof setFavoritesAC>
type currencyRatesReducerTypes=GetCurrencyACType | setFavoritesACType

let  initialState:initialStateType= {
  items:[],
  names: [],
};

export const currencyRatesReducer = (state = initialState, action: currencyRatesReducerTypes): initialStateType => {
  switch (action.type) {
    case 'GET_CURRENCY': {
      return {...state,
        items: action.payload}
    }
    case 'SET_FAVORITES': {
      return {...state, names:[...state.names, action.payload]
        }
      }
    default:
      return state;
  }
};
const getCurrencyAC=(payload:CurrencyType[])=>({type:'GET_CURRENCY',payload}as const)
export const setFavoritesAC=(payload:string)=>({type: 'SET_FAVORITES',payload}as const)
export const getCurrencyTC=()=>(dispatch:Dispatch)=>{
  Currency.get().then(res=>{
    dispatch(getCurrencyAC(res.data))
    let newData:Array<CurrencyTypeForCalc> = res.data.map((el:any)=>{
      return {currencyName: el.ccy, buyRate: el.buy, sellRate: el.sale} as CurrencyTypeForCalc
    })
    dispatch(getCurrencyForCalcAC(newData))
    let mainCurrency:string = res.data.some((el:any,i:number)=>{
      if(i===0){
        if(el.base_ccy){
          return el.base_ccy
        }
      }
    })
    dispatch(getStartMainCurrencyAC(mainCurrency))
    console.log(mainCurrency);

  })
}