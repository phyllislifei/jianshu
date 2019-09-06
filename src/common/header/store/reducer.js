import * as actionTypes from './../../../store/actionTypes'
import {fromJS} from 'immutable'
const defaultState=fromJS({
	focused:false,
	mouseIn:false,
	list:[],
	page:0,
	totalPage:1
});
export default (state=defaultState,action)=>{
	const {type}=action;
	/*if(type===SEARCH_FOCUS){
		//immutable对象的set方法会结合之前immutable的值和现在设置的值，返回一个全新的immutable对象
		return state.set('focused',true)
	}
	if(type===SEARCH_BLUR){
		return state.set('focused',false)
	}
	if(type===LIST_CHANGE){
		return state.set('list',action.value)
	}*/
	switch(type){
		case actionTypes.SEARCH_FOCUS:
			return state.set('focused',true);
		case actionTypes.SEARCH_BLUR:
			return state.set('focused',false);
		case actionTypes.LIST_CHANGE:
			// return state.set('list',action.value).set('totalPage',action.totalPage);
			return state.merge({
			   list:action.value,
			   totalPage: action.totalPage
			});
		case actionTypes.MOUSE_ENTER:
			return state.set('mouseIn',true);
		case actionTypes.MOUSE_LEAVE:
			return state.set('mouseIn',false);
		case actionTypes.CHANGE_PAGE:
		    return state.set('page',action.page)
	}
	return state;
}
