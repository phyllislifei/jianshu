import React ,{ PureComponent } from 'react'
import {ListInfo,ListItem,ListTitle,ListContent} from './../style'
import pic from './../../../statics/img/wangjunkai.jpg'
import {connect } from 'react-redux'
import {Link} from 'react-router-dom'

class List extends PureComponent{
	render(){
	    const {list}=this.props;
		return(
			<div>
				{list.map((item,index)=>{
				     return(
					     <ListItem key={index}>
						     <img className={"pic"} src={item.get("imgUrl")} alt={""}/>
						     <ListInfo>
							     <Link to={"/detail"}><ListTitle>{item.get("title")}</ListTitle></Link>
							     <ListContent>{item.get("content")}</ListContent>
						     </ListInfo>
						     <div className={"line"}></div>
					     </ListItem>
				     )
				})}
			</div>
		)
	}
}

const mapStateToProps=(state)=>({
    list:state.getIn(['home','articleList'])
});

export default connect(mapStateToProps,null)(List);
