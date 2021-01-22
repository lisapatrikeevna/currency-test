
export enum ACTIONS_TYPE {
  CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
  CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
  CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
  GET_CURRENCY = 'CurrencyExchange/GET_CURRENCY',
  GET_START_MAIN_CURRENCY = 'CurrencyExchange/GET_START_MAIN_CURRENCY',
}
export type getCurrencyForCalcACType = { type: ACTIONS_TYPE.GET_CURRENCY, payload: Array<CurrencyTypeForCalc> };
export type ChangeCurrencyFieldType = { type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE, payload:{ amountOfBYN: string, amountOfCurrency: string } };
export type ChangeCurrentCurrencyType = { type:ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY ,payload:{ currentCurrency: string } };
export type ChangeAction = { type:ACTIONS_TYPE.CHANGE_CHANGE_ACTION ,payload:{ isBuying: boolean } };
export type getStartMainCurrency = { type:ACTIONS_TYPE.GET_START_MAIN_CURRENCY , mainCurrency: string  };
export type CurrencyTypeForCalc = {
  currencyName: string
  buyRate: number
  sellRate: number
};
export type CurrencyState = {
  currencies: Array<CurrencyTypeForCalc>
  currentCurrency: string
  isBuying: boolean
  amountOfBYN: string
  amountOfCurrency: string
  mainCurrency: string
};

const initialState: CurrencyState = {
  currencies: [ ],
  currentCurrency: 'USD',
  isBuying: true,
  amountOfBYN: '',
  amountOfCurrency: '',
  mainCurrency: '',
};
export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType | getCurrencyForCalcACType | getStartMainCurrency
export const currencyReducer = (state: CurrencyState = initialState, action: CurrencyReducersTypes): CurrencyState => {
  // @ts-ignore
  switch (action.type) {
    case ACTIONS_TYPE.GET_CURRENCY: {
      return {
        ...state,
        currencies: action.payload,
      }
    }
    case ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE:
      return {
        ...state,
        ...action.payload,
      }
    case ACTIONS_TYPE.CHANGE_CHANGE_ACTION:
      return {
      ...state,
        ...action.payload,
    }
    case ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY:
      return {
        ...state,
        ...action.payload,
      }
    case ACTIONS_TYPE.GET_START_MAIN_CURRENCY:
      return {
        ...state,
        mainCurrency: action.mainCurrency
      }
    default:
      return state;
  }
};

export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => {
  return {type:ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE, payload:{amountOfBYN,amountOfCurrency},}
};
// @ts-ignore
export const ChangeActionAC = (isBuying: boolean): ChangeAction => {
  return {type:ACTIONS_TYPE.CHANGE_CHANGE_ACTION, payload:{isBuying},}};
export const changeCurrentCurrencyAC = (currentCurrency: string): ChangeCurrentCurrencyType => {
  return {type:ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY, payload:{currentCurrency},}};
export const getStartMainCurrencyAC = (mainCurrency: string): getStartMainCurrency => {
  return {type:ACTIONS_TYPE.GET_START_MAIN_CURRENCY, mainCurrency,}};
export const getCurrencyForCalcAC=(payload:CurrencyTypeForCalc[])=>({type:ACTIONS_TYPE.GET_CURRENCY,payload}as const)

