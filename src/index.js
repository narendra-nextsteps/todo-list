import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import TodoList from "./TodoList";
import App1 from './App/App1/TodoList'
import App2 from './App/App2/TodoList'
import App3 from './App/App3/TodoList'
import App4 from './App/App4/TodoList'
import App5 from './App/App5/TodoList'



var destination = document.querySelector("#container");

ReactDOM.render(<App5 />, destination)