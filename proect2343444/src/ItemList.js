import React from "react";
import Item from "./Item";

export default function ItemsList(props) {
  return (
    <ul className="shop">
      {props.items.map((item) => (
        <li key={item.id}>
          <Item info={item} />
          <button
            className="
            btn-delete
            item-less
            bg-white
            text-black
             border-solid
             border-slate-300 py-3 px-6 min-w-50
             text-[16px]
             rounded
             cursor-pointer
             transition 
             shadow-lg
             mr-10 ml-10 mt-10 mb-10
             border
             active:shadow-none 
             hover:opacity-60
            "
            onClick={() => props.onDeleteClick(item.id)}
          >
            Удалить
          </button>
        </li>
      ))}
    </ul>
  );
}
