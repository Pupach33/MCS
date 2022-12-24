import reportWebVitals from './reportWebVitals';
import "./index.css"
import React from "react";
import { render } from "react-dom";
import TodoList from "./todolist";

const root = document.querySelector("#root");

render(<TodoList />, root);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
