import * as actionTypes from './../../../store/actionTypes'
import {fromJS} from "immutable";

const defaultState=fromJS({
   articleList:[]
});

export default (state=defaultState,action)=>{
    const {type}=action;
    switch(type){
	    case actionTypes.ARTICLE_LIST:
	        return state.set('articleList',action.data)
    }
    return state;
}
