import React,{Component} from "react";

import "./AddItem.css";

class AddItem extends Component {
   
    state = {
        label: "",
    }
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        })
        
    }
    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAddItem(this.state.label);
        this.setState({
            label: ""
        })
    }

    render(){
      
        return(
            <form className="add-item d-flex"
                onSubmit={this.onSubmit}>
                <input type="text" className="form-control form-input" 
                onChange={this.onLabelChange}
                placeholder="Add Your Item..."
                value={this.state.label}/>
                <button type="submit"  className="btn btn-success">
                    Add</button>
            </form>
        )
   }
}

export default AddItem;