// Dependencies.
import { useState } from "react";

// Components.
import { Items } from "./components/Items";
import { CreateItems } from "./components/CreateItems";

// Types.
import type { ItemId, TItems } from "./types";

// Styles.
import "./App.css";

export default function App() {
  const [items, setItems] = useState<TItems[]>([]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { elements } = event.currentTarget;

    const input = elements.namedItem("item");
    const isInputValid = input instanceof HTMLInputElement;

    if (!isInputValid || input.value === "") return;

    const newItem = {
      id: crypto.randomUUID(),
      title: input.value,
    };

    setItems((prevItems) => [...prevItems, newItem]);
    input.value = "";
  };

  const handleDelete = (id: ItemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <main className="container">
        <section className="add-item">
          <h1 className="title">Create Item</h1>
          <CreateItems onSubmit={handleSubmit} />
        </section>
        <aside>
          <h1 className="title">List of Items</h1>
          <Items items={items} handleDelete={handleDelete} />
        </aside>
      </main>
    </>
  );
}
