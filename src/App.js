import { useState } from "react";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: true },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Chargers", quantity: 3, packed: false },
];

function App() {
  return (
    <div className="App">
      <Logo />
      <Form />
      <ItemList />
      <Summary />
    </div>
  );
}

function Logo() {
  return <h1>✈️ Travel</h1>;
}

function Form() {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };

    console.log(newItem);

    setQuantity(1);
    setDescription("");
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>It's a form</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 50 }, (_, i) => i + 1).map((o) => (
          <option value={o} key={o}>
            {o}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function ItemList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((i) => (
          <Item item={i} key={i.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <input type="checkbox" checked={item.packed}></input>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Summary() {
  return (
    <footer className="stats">
      <em>Summary</em>
    </footer>
  );
}

export default App;
