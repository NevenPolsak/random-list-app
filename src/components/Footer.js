import React from 'react'

function Footer({length}) {
    return (
      <div className="footer">
        <p>{length} List {length ===  1 ? "item" : "items"}</p>
      </div>
    );
}

export default Footer