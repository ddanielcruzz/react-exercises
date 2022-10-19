// Create your root and call the render method with your App component. Don't forget to use StrictMode
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

//This is the starting point for the component
const root = ReactDOM.createRoot(document.getElementById("root"));

//Now we need to render the component.
root.render(<App/>)