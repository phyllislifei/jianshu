import {SEARCH_FOCUS,SEARCH_BLUR,LIST_CHANGE} from './store/actionTypes'
import {fromJS} from "immutable";
import axios from 'axios'
export const handleInputFocusAction=()=>{
    return {
        type:SEARCH_FOCUS
    }
};

export const handleInputBlurAction=()=>{
    return{
        type:SEARCH_BLUR
    }
};

const changeListData=(value)=>{
    return{
        type:LIST_CHANGE,
        value:fromJS(value)
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
