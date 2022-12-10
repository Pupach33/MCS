import React, { useEffect, useState } from "react";
import ItemsList from "./ItemList";
import AddItem from "./AddItem";
import "./index.css";
import uuid from "react-uuid"

export default function Shop() {
  const [items, setItems] = useState(() => {
    const value = JSON.parse(localStorage.getItem("items"));
    if (!value) {
      return [];
    } else return value;
  });
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [valid, setValid] = useState("");

  useEffect(() => {
    localStorage.setItem("items", JSON.stringify(items));
  }, [items]);
  useEffect(() => {
    if (items.length === 0) {
      document.title = "товары отсутсвуют";
    } else document.title = `${items.length} товаров`;
  }, [items]);
  function handleFormSubmit(event) {
    event.preventDefault();

    if (!name) {
      setValid("Введите название");
      return;
    }
    if (!desc) {
      setValid("Введите описание ");
      return;
    }
    setItems([
      ...items,
      {
        id: uuid(),
        name: name,
        desc: desc
      }
    ]);
    setName("");
    setDesc("");
    setValid("");
  }

  function handleNameChange(event) {
    setName(event.target.value);
  }

  function handleDescChange(event) {
    setDesc(event.target.value);
  }

  function handleDeleteClick(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  return (
    <>
      <AddItem
        name={name}
        desc={desc}
        valid={valid}
        onNameChange={handleNameChange}
        onDescChange={handleDescChange}
        onFormSubmit={handleFormSubmit}
      />
      <div>{items.length === 0 && <p>Добавьте первый товар</p>}</div>
      <ItemsList items={items} onDeleteClick={handleDeleteClick} />
    </>
  );
}
