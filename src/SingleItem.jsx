import React, { useState } from "react";

const SingleItem = ({ item, removeItem, editItem }) => {
  const { id, name, completed } = item;
  //   const [isChecked, setIsChecked] = useState(completed);
  return (
    <div className="single-item">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => editItem(id)}
      />
      <p
        style={{
          textTransform: "capitalize",
          textDecoration: completed && "line-through",
        }}
      >
        {name}
      </p>
      <button className="btn remove-btn" onClick={() => removeItem(id)}>
        delete
      </button>
    </div>
  );
};

export default SingleItem;
