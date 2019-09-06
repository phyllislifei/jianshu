import {combineReducers} from 'redux-immutable';
import  HeaderReducer from './../common/header/store';
import  HomeReducer from './../pages/home/store'
const reducer=combineReducers({
  header:HeaderReducer,
  home:HomeReducer,
});

export default reducer;
