import React from "react";

import "./Header.css";

const Header = ({toDo,done}) => {
    return (
        <div className="header d-flex">
            <h1>ToDo App</h1>
            <h2>{toDo} more to do, {done} done</h2>
        </div>    
    )
}

export default Header;