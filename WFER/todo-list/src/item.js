import React from "react";
import { useState } from "react";

export default function Item(props) {
  const [za, setZa] = useState(false);
  function handleZaClick() {
    setZa(!za);
  }

  return (
    <>
    <div className="flex content-center w-11/12 text-[25px] ">
      {za === false ? (
        <button className="flex w-full ml-10" onClick={handleZaClick}>{props.name.todoadd}</button>
        ) : ( 
          <>
          <div className="flex w-full  bg-gray-300">
          <p className="">&#10004;</p>
        <button
          style={{ textDecoration: "line-through" }}
          onClick={handleZaClick}
          className=" flex w-full ml-10"
        >
          {props.name.todoadd}
        </button>
        </div>
        </>
      )}
    </div>  
    </>
  );
}
