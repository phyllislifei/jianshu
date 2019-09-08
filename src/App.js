import React, {Component} from 'react';
import {Provider} from 'react-redux';
import { Globalstyle } from './style';
import Header from './common/header/index';
import {IconFontstyle} from "./statics/iconfont/iconfont";
import store from "./store";
import { BrowserRouter,Route } from "react-router-dom";
import Home from './pages/home'
import Detail from './pages/detail'

class App extends Component{
    render(){
        return(
            <Provider store={store}>
                    <Globalstyle/>
                    <IconFontstyle/>
                    <BrowserRouter>
                        <Header/>
                        <Route exact path={'/'} component={Home}/>
                        <Route exact path={'/detail'} component={Detail}/>
                    </BrowserRouter>
            </Provider>
        )
    }
}


export default App;
