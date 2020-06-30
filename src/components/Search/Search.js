import React,{Component} from "react";

import "./Search.css";

class Search extends Component {

  state = {
		searchName: "" 
	}
	onSearchChange = (e) => {
		const searchName = e.target.value;
		this.setState({searchName});
		this.props.onSearchChange(searchName);
	}
   
  render(){
    return (
			<input className="form-control " placeholder="Search..." type="text"
				value={this.state.searchName}
				onChange={this.onSearchChange} />
    )
  }
}

export default Search;  