import React, { useState } from "react";
import ItemList from "./ItemList";

export default function Content({
  items,
  handleClick,
  handleDelete,
  isLoading,
}) {
  return (
    <>
      {items.length ? (
        <ItemList
          items={items}
          handleClick={handleClick}
          handleDelete={handleDelete}
        />
      ) : (
        <p style={{ marginTop: "1em" }}>
          {isLoading ? "Loading..." : "Your list is empty!"}
        </p>
      )}
    </>
  );
}
