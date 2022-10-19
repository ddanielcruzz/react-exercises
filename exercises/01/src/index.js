// Create your root and call the render method with your App component. Don't forget to use StrictMode

import React from 'react' //react es un ambiente separado de donde se quiere renderizar
import ReactDom from 'react-dom/client' //queremos renderizarlo en la web
import App from './App'

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(<App />)//aqui ya puedo empezar a escibir JSX