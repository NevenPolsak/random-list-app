import React from 'react'
import { FaRegTrashAlt } from "react-icons/fa";
function LineItem({item,handleDelete,handleCheck}) {
    return (
      <li className="item" key={item.id}>
        <input
          type="checkbox"
          onChange={() => handleCheck(item.id)}
          checked={item.checked}
        />
        <label
          onDoubleClick={() => handleCheck(item.id)}
          style={
            item.checked
              ? { textDecoration: "line-through", color: "red" }
              : null
          }
        >
          {item.item}
        </label>
        <FaRegTrashAlt
          onClick={() => handleDelete(item.id)}
          role="button"
                tabIndex="0"
                aria-label={`Delete ${item.item}`}
        />
      </li>
    );
}

export default LineItem
