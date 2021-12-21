import React from "react";
import ItemList from "./ItemList";

function Content({items,handleCheck,handleDelete}) {
  return (
    <div className="main">
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "2rem" }}>Your list is empty.</p>
      )}
    </div>
  );
}

export default Content;
