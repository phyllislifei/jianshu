import * as actionTypes from './../../../store/actionTypes'
import {fromJS} from "immutable";

const defaultState=fromJS({
   articleList:[],
	recommendList:[],
	writerList:[],
	showScroll:false,
});

export default (state=defaultState,action)=>{
    const {type}=action;
    switch(type){
	    case actionTypes.ARTICLE_LIST:
	        return state.merge({
	         "articleList":fromJS(action.articleList),
	         "recommendList":fromJS(action.recommendList),
	         "writerList":fromJS(action.writerList)
	        });
	    case actionTypes.ARTICLE_LIST_MORE:
	       return state.set("articleList",state.get("articleList").concat(fromJS(action.articleList)));
	    case actionTypes.SCROLL_SHOW:
	        if(action.data>80){
	            return state.set("showScroll",true)
	        }
	        else{
		        return state.set("showScroll",false)
	        }
    }
    return state;
}
