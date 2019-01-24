import React from "react";
import { FaTrash } from "react-icons/fa/";

function TodoItems (props) {

  var todoEntries = props.entries;
  var listItems = todoEntries.map((item, index) => (
    <li key={item.key}>
      {item.text}
    </li>
  ));

  return (
    <ul className="theList">
        {listItems}
    </ul>
  );
};

export default TodoItems;
