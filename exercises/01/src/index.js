// Create your root and call the render method with your App component. Don't forget to use StrictMode

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App' // Set .js extension to App.js is optional

const root = ReactDOM.createRoot(document.getElementById('root')) // ReactDOM.createRoot -> return an object

root.render(<App />)
