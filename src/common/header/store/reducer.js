import {SEARCH_FOCUS,SEARCH_BLUR,LIST_CHANGE} from './../../../store/actionTypes'
import {fromJS} from 'immutable'
const defaultState=fromJS({
	focused:false,
	list:[]
});
export default (state=defaultState,action)=>{
	const {type}=action;
	if(type===SEARCH_FOCUS){
		//immutable对象的set方法会结合之前immutable的值和现在设置的值，返回一个全新的immutable对象
		return state.set('focused',true)
	}
	if(type===SEARCH_BLUR){
		return state.set('focused',false)
	}
	if(type===LIST_CHANGE){
		return state.set('list',action.value)
	}
	return state;
}
