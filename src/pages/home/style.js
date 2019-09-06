import styled from 'styled-components'
export const HomeWrapper=styled.div`
    width:1250px;
    margin:0 auto;
    overflow:hidden;
`;

export const HomeLeft=styled.div`
    width:850px;
    margin-top:30px;
    margin-left:15px;
    float:left;
`;
export const HomeRight=styled.div`
    width:360px;
    float:right;
    margin-top:30px;
`;

export const ListItem=styled.div`
     float:left;
     overflow:hidden;
     padding-top:20px;
     .pic{
        width:150px;
        height:125px;
        display:block;
        float:right;
        border-radius:10px;
        margin-top:10px;
     }
     .line{
        border-bottom:1px #ddd solid;
        margin-top:40px;
     }
`;

export const ListInfo=styled.div`
     overflow:hidden;
     padding:0 20px 10px 0;
     box-sizing :border-box;
     width:600px;
`;

export const ListTitle=styled.a`
     float:left;
     font-size:18px;
     font-weight:700;
     line-height:1.5;
`;

export const ListContent=styled.div`
     float:left;
     font-size:13px;
     color:#999;
     line-height:24px;
     margin:10px 0 8px;
`;
