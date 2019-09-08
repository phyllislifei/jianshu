import  React,{ PureComponent } from 'react';
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import {connect} from 'react-redux';
import * as actionCreators from './../../actionCreators'


import {
	HomeWrapper,
	HomeLeft,
	HomeRight,
	ReadMore,
	BackTop
} from "./style";

class Home extends PureComponent{
	render(){
		return (
			<HomeWrapper>
				<HomeLeft>
					<List/>
					<ReadMore onClick={this.props.getMore}>阅读更多</ReadMore>
				</HomeLeft>
				<HomeRight>
					<Recommend/>
					<Writer/>
				</HomeRight>
				{this.props.showScroll?<BackTop onClick={this.handleScrollTop}>回到顶部</BackTop>:null}
			</HomeWrapper>
		)
	}
	componentDidMount() {
		this.props.getList();
		this.bindEvents();
	}

	componentWillUnmount() {
		window.removeEventListener("scroll",this.props.changeScrollShow)
	}

	bindEvents(){
		window.addEventListener("scroll",this.props.changeScrollShow)
	}

	handleScrollTop(){
		window.scrollTo(0,0)
	}
}
const mapStateToProps=(state)=>({
	showScroll: state.getIn(["home","showScroll"])
});

const mapDispatchToProps=(dispatch)=>({
	getList(){
		dispatch(actionCreators.getArticleListAction())
	},
	getMore(){
		dispatch(actionCreators.getMoreAction())
	},
	changeScrollShow(){
		dispatch(actionCreators.changeScrollShowAction(document.documentElement.scrollTop))
	}
});

export default connect(mapStateToProps,mapDispatchToProps)(Home);
