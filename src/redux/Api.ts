import axios from "axios";

const instans=axios.create({
    baseURL: 'https://api.privatbank.ua/p24api/',
})

//https://api.privatbank.ua/#p24/exchange
export const Currency = {
    get(){
        return instans.get('pubinfo?exchange&json&coursid=11')
    }
}