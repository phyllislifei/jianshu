import React, {Component} from 'react';
import {Provider} from 'react-redux'
import { Globalstyle } from './style';
import Header from './common/header/index'
import {IconFontstyle} from "./statics/iconfont/iconfont";
import store from "./store"

class App extends Component{
    render(){
        return(
            <Provider store={store}>
                <Globalstyle/>
                <IconFontstyle/>
                <Header/>
            </Provider>
        )
    }
}


export default App;
