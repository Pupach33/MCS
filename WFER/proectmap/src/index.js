import React, { useState, useLayoutEffect } from "react";
import { render } from "react-dom";
import "./index.css";
import useMapbox from "./useMapbox";
import reportWebVitals from "./reportWebVitals"

function App() {
  const [random, setRandom] = useState(Math.random());

  useMapbox("map", [34, 39]);

  return (
    <>
      <button id="rerender" onClick={() => setRandom(Math.random())}
      className="
      bg-blue-700
          text-white
           border-solid rounded
           py-2 px-10
           text-[16px]
           cursor-pointer
           transition 
           border
           shadow-lg
           " 
      >
        Ререндер!
      </button>
      <div id="map"></div>
    </>
  );
}

render(<App />, document.querySelector("#root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
