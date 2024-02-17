import React from "react";
import { FaTrashAlt } from "react-icons/fa";

function LineItem({ item, handleClick, handleDelete }) {
  return (
    <li className="item">
      <input
        type="checkbox"
        checked={item.checked}
        onChange={() => handleClick(item.id)}
      />
      <label onDoubleClick={() => handleClick(item.id)}>{item.item}</label>

      <FaTrashAlt
        role="button"
        tabIndex="0"
        onClick={() => handleDelete(item.id)}
        aria-label={`Delete ${item.item}`}
      />
    </li>
  );
}

export default LineItem;
