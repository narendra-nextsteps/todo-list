import React from "react";

function TodoItems (props) {

  const deleteItem = (key, index) => {
    console.log(index, key)
    props.deleteItem(index)
  }

  var todoEntries = props.entries;
  var listItems = todoEntries.map((item, index) => (
    <li onClick={() => deleteItem(item.key, index)} key={item.key}>{item.text}</li>
  ));

  return (
    <ul className="theList">
        {listItems}
    </ul>
  );
};
 
export default TodoItems;
