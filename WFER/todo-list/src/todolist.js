import React from "react";
import { useState } from "react";
import uuid from "react-uuid";
import Item from "./item";

export default function TodoList() {
  const [items, setItems] = useState([]);
  const [todoadd, setTodoAdd] = useState("");
  const [valid, setValid] = useState("");

  function handleFormSambmit(e) {
    e.preventDefault();
    if (todoadd === "") {
      setValid("Добавте название!");
      return;
    }
    setItems([...items, { todoadd, id: uuid() }]);
    setTodoAdd("");
    setValid("");
  }
  function handleRemoveClick(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function handleItemChange(e) {
    setTodoAdd(e.target.value);
  }
  return (
    <>
      <div className=" flex bg-red-500 p-4 content-center justify-center ">
        <div className="flex flex-col w-3/5">
        <h1 className="text-[40px] text-white ">Список дел</h1>
        <form onSubmit={handleFormSambmit} className="flex h-9
         ">
          <input
          className="text-[19px] w-4/5 outline-none "
            type="text"
            value={todoadd}
            onChange={handleItemChange}
            placeholder="Купить яиц"
          />
          <input type="submit" value="добавить" className="w-1/5 cursor-pointer hover:bg-gray-200 active:bg-gray-400 bg-gray-300" />
        </form>
        <div className="text-[20px] text-gray-300">{valid}</div>
        </div>
      </div>
      <div className="flex w-3/5 m-auto border border-solid  bg-gray-100 ">
      <ul className="w-full  ">
          {items.map((item) => {
            return (
              <li className="flex justify-between border border-solid hover:bg-gray-200 border-gray-200 h-16" key={item.id}>
                <Item name={item} />
                <button className="w-1/12 bg-red-200 active:bg-red-600 hover:bg-red-500 " onClick={() => handleRemoveClick(item.id)}>
                &#10006;
                </button>
              </li>
            );
          })}
        </ul>
        </div>
        
    </>
  );
}
