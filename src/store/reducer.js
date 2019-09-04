import {combineReducers} from 'redux-immutable';
import  HeaderReducer from './../common/header/store';
const reducer=combineReducers({
  header:HeaderReducer
});

export default reducer;
