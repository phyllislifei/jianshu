import React , {PureComponent} from 'react';
import {connect} from 'react-redux'
import {CSSTransition} from "react-transition-group";
import * as actionCreators from './../../actionCreators';
import {Link} from "react-router-dom"
import {
	HeaderWrapper,
	Logo,
	Nav,
	NavItem,
	Search,
	Addition,
	Button,
	SearchWrapper,
	SearchInfo,
	SearchInfoTitle,
	SearchInfoSwitch,
	SearchInfoItem
} from './style'

class Header extends PureComponent{
	getListArea=(focused)=>{
		const {list,page,handleEnter,handleLeave,mouseIn,handleChangePage,totalPage}=this.props;
		const newList=list.toJS(list);
		const pageList=[];
		for(let i=page*10;i<(page+1)*10;i++){
			if(i>=newList.length) break;
			pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>)
		}
		if(focused||mouseIn){
			return(
				<SearchInfo onMouseEnter={handleEnter} onMouseLeave={handleLeave}>
					<SearchInfoTitle>热门搜索</SearchInfoTitle>
					<SearchInfoSwitch onClick={()=>handleChangePage(totalPage,page,this.spinIcon)}>
						<i ref={(icon)=>{this.spinIcon=icon}} className={'iconfont spin'}>&#xe851;</i>
						换一换
					</SearchInfoSwitch>
					<div>
						{pageList}
					</div>
				</SearchInfo>
			);
		}
		else{
			return null;
		}
	};
	render(){
		const {focused,handleInputFocus,handleInputBlur,list}=this.props;
		return(
			<HeaderWrapper>
				<Link to={"/"}><Logo/></Link>
				<Nav>
					<NavItem className={'left active'}>首页</NavItem>
					<NavItem className={'left'}>下载APP</NavItem>
					<NavItem className={'right'}>登录</NavItem>
					<NavItem className={'right'}>  <i className={'iconfont'}>&#xe636;</i></NavItem>
					<SearchWrapper>
						<CSSTransition
							timeout={200}
							in={focused}
							classNames={"slide"}
						>
							<Search onFocus={()=>handleInputFocus(list)} onBlur={handleInputBlur} className={focused ? 'focused':''}/>
						</CSSTransition>
						<i className={ focused ? 'focused iconfont zoom':'iconfont zoom'}>&#xe6e4;</i>
						{this.getListArea(focused)}
					</SearchWrapper>
				</Nav>
				<Addition>
					<Button className={'writing'}>
						<i className={'iconfont'}>&#xe624;
						</i>
						写文章
					</Button>
					<Button className={'reg'}>注册</Button>
				</Addition>
			</HeaderWrapper>
		)
	}
}

const mapStateToprops=(state)=>{
	return {
		//focused:state.getIn(['header','focused'])与下面那句话等价
		focused:state.get('header').get('focused'),
		list:state.get('header').get('list'),
		page:state.getIn(['header','page']),
		mouseIn:state.getIn(['header','mouseIn']),
		totalPage:state.getIn(['header','totalPage'])
	}
};

const mapDispatchToprops=(dispatch)=>{
	return {
		handleInputFocus(list){
			(list.size===0)&&dispatch(actionCreators.getListAction());
			dispatch(actionCreators.handleInputFocusAction())
		},
		handleInputBlur(){
			const action=actionCreators.handleInputBlurAction();
			dispatch(action)
		},
		handleEnter(){
			dispatch(actionCreators.mouseEnterAction());
		},
		handleLeave(){
			dispatch(actionCreators.mouseLeaveAction());
		},
		handleChangePage(totalPage,page,spinIcon) {
		    let originAngle=spinIcon.style.transform.replace(/[^0-9]/ig,'');
		    if(originAngle){
		         originAngle=parseInt(originAngle,10)+360;
		    }else{
			    originAngle=360;
		    }
			spinIcon.style.transform=`rotate(${originAngle}deg)`;
			if(page<totalPage-1)
				dispatch(actionCreators.changePageAction(page+1));
			else{
				dispatch(actionCreators.changePageAction(0))
			}
		}
	};
};

export default connect(mapStateToprops,mapDispatchToprops)(Header);

