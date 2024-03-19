import { useState } from "react";
import Item from "./Item";

export default function ItemList({
  items,
  onRemoveItems,
  onToggleItems,
  onClearList,
}) {
  const [sortMethod, setSortMethod] = useState("input");

  function handleSortChange(value) {
    setSortMethod(value);
  }

  let sortedItems;
  if (sortMethod === "input") {
    sortedItems = items;
  }
  if (sortMethod === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortMethod === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems.map((i) => (
          <Item
            item={i}
            key={i.id}
            onRemoveItems={onRemoveItems}
            onToggleItems={onToggleItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortMethod}
          onChange={(e) => handleSortChange(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed state</option>
        </select>
        <button onClick={onClearList}>Clear List</button>
      </div>
    </div>
  );
}
