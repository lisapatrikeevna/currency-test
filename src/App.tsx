import React from "react";
import './App.css';
import Header, {PATH} from "./components/Header/Header";
import {Redirect, Route, Switch} from "react-router-dom";
import CurrencyRates from "./components/CurrencyRates/CurrencyRates";
import {CurrencyEContainer} from "./containers/CurrencyExchangeContainer/CurrencyExchangeContainer";

function App() {
    return (
        <div className={"App"}>
            <Header/>
            <Switch>
                <Route path={'currency-test/'} exact render={()=><Redirect to={PATH.CURRENSYRATES}/>}/>
                <Route path={PATH.CALCULATOR} render={()=><CurrencyEContainer/>}/>
                <Route path={PATH.CURRENSYRATES} render={()=><CurrencyRates/>}/>
            </Switch>
        </div>
    );
}

export default App;
