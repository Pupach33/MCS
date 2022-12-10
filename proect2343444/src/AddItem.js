import React from "react";


export default function AddItem(props) {
  return (
    <form onSubmit={props.onFormSubmit}>
      <div className="ml-1">
        <label className="mr-1" htmlFor="item-name">Название:</label>
        <input
          type="text"
          value={props.name}
          onChange={props.onNameChange}
          id="item-name"
          placeholder="Название товара"
          className="
          textfield
          mt-3
          px-5
          py-2
          border-solid
          mb-1
          text-[16px]
          rounded
          border-slate-300
          border
          "
        />
      </div>
      <div className="ml-1">
        <label htmlFor="item-description">Описание:</label>
        <input
          type="text"
          value={props.desc}
          onChange={props.onDescChange}
          id="item-description"
          placeholder="Описание товара"
          className="
          textfield
          px-5
          py-2
          mb-1
          mt-1
          border border-solid rounded border-slate-300
          text-[16px]
          "
        />
      </div>
      <div className="form-footer">
        <div className="validation">{props.valid}</div>
        <input type="submit" className="
        btn btn-basic
          bg-blue-700
          text-white
           border-solid rounded
           py-2 px-10
           ml-10
           
           text-[16px]
           cursor-pointer
           transition 
           border
           shadow-lg
           " 
          
           value="Добавить" />
      </div>
    </form>
  );
}