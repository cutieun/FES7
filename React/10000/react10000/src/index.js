import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
import './index.css'; /* App보다 이전에 import 해야 스타일을 덮어쓰지 않음 */
import App from "./App";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
