import React ,{ PureComponent } from 'react'
import {WriterWrapper,WriterItem} from'./../style'
import {connect} from "react-redux";

class Writer extends PureComponent{
	render(){
		return(
			<WriterWrapper>
				{this.props.list.map((item)=>{
					return (	<WriterItem key={item.get("id")}><img className={"left pic"} src={item.get("imgUrl")} alt=""/><div className={"left text"}>{item.get("writer")}</div></WriterItem>)
				})}
			</WriterWrapper>
		)
	}
}
const mapStateToProps=(state)=>({
	list:state.getIn(['home','writerList'])
});

export default connect(mapStateToProps,null)(Writer);
