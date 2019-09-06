import React ,{ Component } from 'react'
import {ListInfo,ListItem,ListTitle,ListContent} from './../style'
import pic from './../../../statics/img/wangjunkai.jpg'
import {connect } from 'react-redux'
import * as actionCreators from './../../../actionCreators'

class List extends Component{
	render(){
	    const {list}=this.props;
		return(
			<div>
				{console.log(list)}
				{list.map((item)=>{
				     return(
					     <ListItem key={item["id"]}>
						     <img className={"pic"} src={item["imgUrl"]} alt={""}/>
						     <ListInfo>
							     <ListTitle>{item["title"]}</ListTitle>
							     <ListContent>{item["content"]}</ListContent>
						     </ListInfo>
						     <div className={"line"}></div>
					     </ListItem>
				     )
				})}
			</div>
		)
	}
	componentDidMount() {
	   this.props.getList();
	}
}

const mapStateToProps=(state)=>({
    list:state.getIn(['home','articleList'])
});
const mapDispatchToProps=(dispatch)=>({
    getList(){
         dispatch(actionCreators.getArticleListAction())
    }
});
export default connect(mapStateToProps,mapDispatchToProps)(List);
