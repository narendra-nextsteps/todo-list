import React, { Component } from "react";
import "../../TodoList.css"

class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputVal: ''
    };
    /**
     * Need to bind a method/function because in js the default binding is set
     * to undefined in strict mode(JS class or modules by default run in
     * strict mode).
     */
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(event) {
  //   const value = event.target.value
  //   this.setState({inputVal: value}, ()=>console.log(this.state.inputVal))
  // }

  /**
   * Does not need binding because arrow functions bind themselves lexically.
   * i.e. What ever lexical scope they are being called from they will be bound
   * to that scope.
   */

  handleChange = event => {
    const value = event.target.value
    this.setState({inputVal: value}, ()=>console.log(this.state.inputVal, event))
  }

  render() {
    return (
      <div className="todoListMain">
        <h2 style={{color: 'white', textAlign: 'center'}}>ToDo List</h2>
        <div className="header">
          <form>
            <input placeholder="enter task" value={this.state.inputVal}
              onChange={this.handleChange}
            />
            <button type="submit">add</button>
          </form>
        </div>
      </div>
    );
  }
}

export default TodoList;
