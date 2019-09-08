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
    overflow:hidden;
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

export const ListTitle=styled.div`
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

export const RecommendWrapper=styled.div`
     width:360px;
`;

export const RecommendItem=styled.div`
    margin:10px 0;
    height:70px;
    background:url(${(props)=>{return props.imgUrl}});
    background-size:cover;
`;

export const WriterWrapper=styled.div`
     width:360px;
     margin-top:30px;
`;

export const WriterItem=styled.div`
    height:100px;
    .left{
          float:left
    }
    .pic{
         width:60px;
         height:60px;
         border-radius:5px;
     }
    .text{
        margin-left:20px;
        margin-top:20px;
    }
`;

export const ReadMore=styled.div`
       width:755px;
       height:40px;
       border-radius:20px;
       background:#ccc;
       color:#fff;
       line-height:40px;
       text-align:center
       float:left;
       margin:40px 0;
       cursor:pointer;
`;

export const BackTop=styled.div`
        position:fixed;
        width:50px;
        height:50px;
        line-height:50px;
        text-align:center;
        border:1px solid #ccc;
        right:50px;
        bottom:50px;
        font-size:10px;
        cursor:pointer
`;
