import React , {Component} from 'react';
import {connect} from 'react-redux'
import {CSSTransition} from "react-transition-group";
import * as actionCreators from './../../actionCreators'
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

class Header extends Component{
	getListArea=(show)=>{
		if(show){
			return(
				<SearchInfo >
					<SearchInfoTitle>热门搜索</SearchInfoTitle>
					<SearchInfoSwitch>换一换</SearchInfoSwitch>
					<div>
						{this.props.list.map((item)=>{
							return <SearchInfoItem key={item}>{item}</SearchInfoItem>
						})}
					</div>
				</SearchInfo>
			);
		}
		else{
			return null;
		}
	};
	render(){
		return(
			<HeaderWrapper>
				<Logo href={'/'}/>
				<Nav>
					<NavItem className={'left active'}>首页</NavItem>
					<NavItem className={'left'}>下载APP</NavItem>
					<NavItem className={'right'}>登录</NavItem>
					<NavItem className={'right'}>  <i className={'iconfont'}>&#xe636;</i></NavItem>
					<SearchWrapper>
						<CSSTransition
							timeout={200}
							in={this.props.focused}
							classNames={"slide"}
						>
							<Search onFocus={this.props.handleInputFocus} onBlur={this.props.handleInputBlur} className={ this.props.focused ? 'focused':''}/>
						</CSSTransition>
						<i className={ this.props.focused ? 'focused iconfont':'iconfont'}>&#xe6e4;</i>
						{this.getListArea(this.props.focused)}
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
		list:state.get('header').get('list')
	}
};

const mapDispatchToprops=(dispatch)=>{
	return {
		handleInputFocus(){
			dispatch(actionCreators.getListAction());
			dispatch(actionCreators.handleInputFocusAction())
		},
		handleInputBlur(){
			const action=actionCreators.handleInputBlurAction();
			dispatch(action)
		}
	};
};

export default connect(mapStateToprops,mapDispatchToprops)(Header);

