import React, { Component } from "react";
import TodoItems from './TodoItems'
import "./TodoList.css"
 
class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.deleteItem = this.deleteItem.bind(this)
  }

  handleChange(event) {
    const value = event.target.value
    this.setState({inputVal: value})
  }

  addItem(event) {

    if (this.state.inputVal !== "") {
      var newItem = {
        text: this.state.inputVal,
        key: Date.now()
      };
   
      this.setState((prevState) => {
        return { 
          items: prevState.items.concat(newItem),
          inputVal: ""
        };
      });
    }
    console.log(this.state.items);
    event.preventDefault();  
 
  }

  deleteItem(index) {
    const items = [...this.state.items]
    items.splice(index, 1)
    this.setState({ items: items})
  }

  render() {
  console.log(this.state.items.join())
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input placeholder="enter task" value={this.state.inputVal} onChange={this.handleChange}/>
            <button type="submit">add</button>
          </form>
        </div>
        <TodoItems entries={this.state.items} deleteItem={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;
