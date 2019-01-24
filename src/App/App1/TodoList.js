import React, { Component } from "react";
import "../../TodoList.css"

class TodoList extends Component {

  render() {
    return (
      <div className="todoListMain">
        <h2 style={{color: 'white', textAlign: 'center'}}>ToDo List</h2>
        <div className="header">
          <form >
            <input placeholder="enter task" />
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
