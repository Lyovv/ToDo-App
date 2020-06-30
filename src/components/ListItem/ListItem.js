import React, {Component} from "react";

import "./ListItem.css";

class ListItem extends Component{

    render(){
        const {label, onDeleted,onMoveDone,onMoveImportant,
        important,done} = this.props;

        let classNames = "list";
        if(done) {
            classNames += " done"
        }
        
        if(important){
            classNames += " important"
        }
        
        return (
            <div className={classNames}>
                <span className="to-list-item"

                onClick={onMoveDone}>
                 
                    { label }
                
                </span>
                <button type="button" className="btn btn-outline-danger btn-sm float-right"
                onClick={onDeleted}>
                    <i className="fa fa-times"></i>
                </button>
                <button type="button" className="btn btn-outline-success btn-sm float-right btn-imp"
                onClick={onMoveImportant}>
                    <i className="fa fa-exclamation"></i>
                </button>
    
            </div>    
            ); 
    }
}

export default ListItem;