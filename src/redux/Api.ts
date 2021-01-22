import axios from "axios";

const instans=axios.create({
    baseURL: 'https://api.privatbank.ua/p24api/',
})
//pubinfo?exchange&json&coursid=11
export const Currency = {
    get(){
        return instans.get('pubinfo?exchange&json&coursid=11')
    }
}