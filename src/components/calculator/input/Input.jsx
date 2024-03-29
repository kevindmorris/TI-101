import React from "react";

export default function Input(props) {
  return (
    <input
      type="number"
      value={String(props.value).replace(/^0+/, "")}
      onChange={(event) => props.setValue(parseFloat(event.target.value) || 0)}
    />
  );
}
