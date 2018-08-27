import React, { Component } from "react";
 
function TodoItems (props) {

  var todoEntries = props.entries;
  var listItems = todoEntries.map(item => (
    <li key={item.key}>{item.text}</li>
  ));

  return (
    <ul className="theList">
        {listItems}
    </ul>
  );
};
 
export default TodoItems;
