import React, { useState } from "react";

export default function Item(props) {
  const [total, setTotal] = useState(0);

  const { info } = props;

  function handleAddClick() {
    setTotal(total + 1);
  }

  function handleRemoveClick() {
    if (total > 0) {
      setTotal(total - 1);
    }
  }

  if (!info) {
    return null;
  }

  return (
    <div className="item">
      <div className="ml-10">
        <h2 className="text-[30px]">{info.name}</h2>
        <p>{info.desc}</p>
      </div>
      <div className="flex item-center mb-50">
        <button 
          className="
           item-less
          bg-white
          text-black
           border-solid
           border-slate-300 py-2 px-7 min-w-50
           text-[16px]
           rounded
           cursor-pointer
           transition 
           shadow-lg
           border
           mr-5 ml-5
           active:shadow-none 
           hover:opacity-80
           disabled:opacity-40 
           "
          disabled={total === 0}
          onClick={handleRemoveClick}
        >
          -
        </button>
        <h3 className="text-[16px]">{total ? total : ""}</h3>
        <button 
        className=" 
          bg-white
          text-black
           border-solid
           border-slate-300 py-2 px-7 min-w-50
           text-[16px]
           rounded
           cursor-pointer
           border
           transition 
           shadow-lg
           mr-10 ml-5   
        item-more
        " 
        onClick={handleAddClick}>
          +
        </button>
      </div>
    </div>
  );
}
