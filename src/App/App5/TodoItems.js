import React from "react";
import { FaTrash } from "react-icons/fa/";
import FlipMove from "react-flip-move";

function TodoItems (props) {

  const deleteItem = (key, index) => {
    console.log(index, key)
    props.deleteItem(index)
  }

  var todoEntries = props.entries;
  var listItems = todoEntries.map((item, index) => (
    <li key={item.key}>
      {item.text}
      <span onClick={() => deleteItem(item.key, index)}>
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
