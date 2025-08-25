import React, { useState } from "react";
import "./App.css";

type ItemId = `${string}-${string}-${string}-${string}-${string}`;

type Items = {
  id: ItemId;
  title: string;
}[];

const ITEMS: Items = [
  { id: crypto.randomUUID(), title: "Car" },
  { id: crypto.randomUUID(), title: "Bike" },
  { id: crypto.randomUUID(), title: "Bus" },
];

export default function App() {
  const [items, setItems] = useState(ITEMS);

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
          <h1 className="title">Add Element in List</h1>
          <form
            onSubmit={handleSubmit}
            aria-label="Add new item form"
            className="form"
          >
            <div>
              <label htmlFor="item" className="label">
                New Item
              </label>
              <input
                type="text"
                name="item"
                required
                aria-label="New item title"
              />
            </div>
            <button type="submit" className="button">
              Add item
            </button>
          </form>
        </section>
        <aside>
          <h1 className="title">List Element</h1>
          <ul aria-label="List of items" className="list">
            {items.length > 0 ? (
              <>
                {items.map(({ id, title }) => (
                  <li key={id} className="list-item">
                    {title}
                    <button
                      onClick={() => {
                        handleDelete(id);
                      }}
                      className={`${"button"} ${"button--delete"}`}
                    >
                      delete
                    </button>
                  </li>
                ))}
              </>
            ) : (
              <li className="list-item">No items found</li>
            )}
          </ul>
        </aside>
      </main>
    </>
  );
}
