# Instrucciones

Dentro de esta carpeta (exercises/02), encontrarás la plantilla de CRA (Create React App) con código para que puedas practicar la creación de componentes.

En el archivo `src/App.jsx` encontrarás JSX que deberás mover a un componente propio dentro de `src/components/ProductCard/ProductCard.jsx`. De igual manera el CSS dentro de `src/App.css` deberá migrarse a `src/components/ProductCard/ProductCard.css` o su equivalente a SCSS si así lo prefieres.

Este componente que crees debe ser dinámico, es decir, deberá obtener el texto dentro de él a través de props.

Dentro de `src/App.js` encontrarás un arreglo de objetos llamado `products`, esto simula la respuesta de una API. Una vez que tengas tu componente que recibe props, deberás renderizar de manera dinámica un componente por cada objeto dentro del arreglo usando el método `.map`.

## Puntos extras

Dentro de las propiedades del objeto de `products` esta el `stock`.

Crea dos componentes de botones, uno de _sold out_ y otro para comprar. Estos componentes también necesitan su propio directorio e.j. `src/components/SoldOutButton/SoldOutButton.jsx` y `src/components/SoldOutButton/SoldOutButton.css` o su equivalente a SCSS si así lo prefieres.

Deberás renderizar el botón de manera condicional si es que el producto tiene stock o no.
