import React from "react";

import ListItem from "../ListItem";
import "./List.css";

const List = ({todos,onDelete,onMoveImportant,onMoveDone}) => {
    const elements = todos.map(el => {
      return (
        <li className="list-group-item" key={el.id}>
           <ListItem label = {el.label} important={el.important} done={el.done}
           onDeleted={() => onDelete(el.id)}
           onMoveImportant = {() => onMoveImportant(el.id)}
           onMoveDone = {() => onMoveDone(el.id)}/>
        </li>
      )
    })  
  
  return (
      <ul className="list-group to-list">
          { elements }
      </ul>
    )
  }

export default List;  