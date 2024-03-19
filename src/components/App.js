import { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import ItemList from "./ItemList.js";
import Summary from "./Summary.js";

function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((ia) => [...ia, item]);
  }
  function handleRemoveItem(itemId) {
    setItems((ia) => ia.filter((i) => i.id !== itemId));
  }
  function handleToggleItem(itemToUpdate) {
    // const updatedItem = { ...itemToUpdate, packed: !itemToUpdate.packed };
    // const filteredArray = items.filter((i) => i.id !== itemToUpdate.id);
    // setItems(() => [...filteredArray, updatedItem]);

    setItems(() =>
      items.map((i) =>
        i.id === itemToUpdate.id ? { ...i, packed: !i.packed } : i
      )
    );
  }
  function handleClearList() {
    const confirmed = window.confirm("Are you sure?");

    if (confirmed) setItems([]);
  }

  return (
    <div className="App">
      <Logo />
      <Form onAddItems={handleAddItem} />
      <ItemList
        items={items}
        onRemoveItems={handleRemoveItem}
        onToggleItems={handleToggleItem}
        onClearList={handleClearList}
      />
      <Summary items={items} />
    </div>
  );
}

export default App;
