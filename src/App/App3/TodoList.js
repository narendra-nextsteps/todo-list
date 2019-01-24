import React, { Component } from "react";
import "../../TodoList.css"

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: '',
      items: []
    };
    this.addItem = this.addItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

      // this.setState((prevState) => {
      //   return {
      //     items: prevState.items.concat(newItem), // [...prevState.items, newItem],
      //     inputVal: ""
      //   };
      // });

      this.setState({items: [...this.state.items, newItem]}, ()=> console.log(this.state.items))
    }

    // console.log(this.state.items);
    event.preventDefault();
  }

  render() {
    return (
      <div className="todoListMain">
        <h2 style={{color: 'white', textAlign: 'center'}}>ToDo List</h2>
        <div className="header">
          <form onSubmit={this.addItem}>
            <input placeholder="enter task" value={this.state.inputVal} onChange={this.handleChange}/>
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
