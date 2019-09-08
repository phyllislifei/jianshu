import styled from 'styled-components'
import logoPic from '../../statics/logo.png'

//HeaderWrapper就是一个带样式的div标签
export const HeaderWrapper=styled.div`
        position:relative;
        height:56px;
        border-bottom:1px solid #f0f0f0;`;

//Logo就是带样式的a标签
export const Logo=styled.div`
        width:100px;
        height:56px;
        display:block;
        position:absolute;
        top:0;
        left:0;
        border-bottom:1px solid #f0f0f0;
        background:url(${logoPic});
        background-size:contain;
`;

/*
export const Logo=styled.a.attrs({
 href:'/'
})`
        width:100px;
        height:56px;
        display:block;
        position:absolute;
        top:0;
        left:0;
        border-bottom:1px solid #f0f0f0;
        background:url(${logoPic});
        background-size:contain;
`;
*/

export const Nav=styled.div`
      width:960px;
      height:100%;
      margin:0 auto;
`;

export const NavItem=styled.div`
      line-height:56px;
      padding:0px 20px;
      font-size:17px;
      color:#333;
      &.left{
        float:left;
      }
      &.right{
        float:right;
        color:#969696
      }
      &.active{
        color:#ea6f5a;
      }
`;

export const SearchWrapper=styled.div`
       float:left;
       position:relative;
       .zoom{
            width:30px;
            height:30px;
            border-radius:25px;
            position:absolute;
            right:5px;
            bottom:4px;
            line-height:30px;
            text-align:center;
            &.focused{
                color:#fff;
                background:#777;
            }
       }
`;

export const Search=styled.input.attrs({
    placeholder:'搜索'
})`
     width:160px;
     height:38px;
     border:none;
     outline:none;
     border-radius:19px;
     margin-top:9px;
     padding:0 30px 0 20px;
     box-sizing:border-box;
     background:#eee;
     font-size:14px;
     margin-left:20px;
     color:#666;
     &::placeholder{
         color:#999;
     }
     &.focused{
         width:240px;
     }
     &.slide-enter{
           transition:all 0.3s ease-out;
       }
       &.slide-enter-active{
            width:240px;
       }
       &.slide-exit{
           transition:all 0.4s ease-out;
       }
       &.slide-exit-active{
            width:160px;
       }
`;

export const Addition=styled.div`
      position:absolute;
      right:0;
      top:0;
      height:56px;
`;

export const Button=styled.button`
     float:right;
     line-height:38px;
     margin-top:9px;
     border-radius:19px;
     border:solid 1px #ec6149;
     margin-right:20px;
     padding:0px 20px;
     &.reg{
         color:#ec6149;
         background:#fff;
     }
     &.writing{
         color:#fff;
         background:#ec6149;
     }
`;

export const SearchInfo=styled.div`
    background:#fff;
    position:absolute;
    left:0;
    top:56px;
    width:240px;
    padding:0 20px;
    overflow:hidden;
    box-shadow:0 0 8px rgba(0,0,0,0.2);
`;

export const SearchInfoTitle=styled.div`
   margin-top:20px;
   margin-bottom:15px;
   line-height:20px;
   font-size:14px;
   color:#969696;
`;

export const SearchInfoSwitch=styled.div`
   cursor:pointer;
   both:clear;
   position:absolute;
   right:0;
   top:26px;
   font-size:13px;
   color:#969696;
   padding-right:20px;
   .spin{
      margin-right:3px;
      font-size:12px;
      transition:all 0.4s ease-in;
      transform:rotate(0deg);
      display:block;
      float:left;
      transform-origin:center;
   }
`;

export const SearchInfoItem=styled.a`
   padding:0 5px;
   float:left;
   line-height:20px;
   border:solid 1px;
   color:#777;
   border-radius:2px;
   display:block;
   margin-right:10px;
   margin-bottom:15px;
`;
