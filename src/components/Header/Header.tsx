import React from 'react';
import { NavLink} from 'react-router-dom';
import cl from './Header.module.css'

export  const PATH = {
    CURRENSYRATES: '/CurrencyRates',
    CALCULATOR:'/CurrencyEContainer'
}
const Header = () => {
    return (
        <div className={cl.nav}>
            <NavLink to={PATH.CURRENSYRATES} activeClassName={cl.active} className={cl.item}>CurrencyRates</NavLink>
            <NavLink to={PATH.CALCULATOR} activeClassName={cl.active} className={cl.item}>CurrencyExchange</NavLink>
        </div>
    );
};

export default Header;