import * as actionTypes from './store/actionTypes'
import {fromJS} from "immutable";
import axios from 'axios'
export const handleInputFocusAction=()=>{
    return {
        type:actionTypes.SEARCH_FOCUS
    }
};

export const handleInputBlurAction=()=>{
    return{
        type:actionTypes.SEARCH_BLUR
    }
};

export const mouseEnterAction=()=>{
    return {
        type:actionTypes.MOUSE_ENTER
    }
};

export const mouseLeaveAction=()=>{
    return {
        type:actionTypes.MOUSE_LEAVE
    }
};

export const changePageAction=(page)=>{
    return {
        type:actionTypes.CHANGE_PAGE,
        page:page
    }
};

const changeListData=(value)=>{
    return{
        type:actionTypes.LIST_CHANGE,
        value:fromJS(value),
        totalPage:Math.ceil(value.length/10)
    }
};

export const getListAction=()=>{
    return (dispatch)=>{
        axios.get('/api/headerList.json').then((res)=>{
            const data=res.data;
            dispatch(changeListData(data.data));
        }).catch(()=>{
            console.log('error');
        })
    }
};

export const getArticleList=(data)=>{
    return{
        type:actionTypes.ARTICLE_LIST,
        data:data
    }
};

export const getArticleListAction=()=>{
    return (dispatch)=>{
        axios.get('/api/homeList.json').then((res)=>{
            const data=res.data;
            dispatch(getArticleList(data.data));
        }).catch(()=>{
            console.log('error');
        })
    }
};


