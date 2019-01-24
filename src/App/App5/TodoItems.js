import React from "react";
import { FaTrash } from "react-icons/fa/";
import FlipMove from "react-flip-move";

function TodoItems (props) {

  const del = (key, index) => {
    console.log(index, key)
    props.deleteItem(index)
  }

  var todoEntries = props.entries;
  var listItems = todoEntries.map((item, index) => (
    <li key={item.key}>
      {item.text}
      <span onClick={() => del(item.key, index)}>
        <FaTrash />
      </span>
    </li>
  ));

  return (
    <ul className="theList">
      <FlipMove >
        {listItems}
      </FlipMove>
    </ul>
  );
};

export default TodoItems;
