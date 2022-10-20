# Ejercicio 03

Dentro de `src/components/ProductCard/ProductCard.jsx` encontrarás un componente que tiene dos botones. Lo que tienes que hacer es agregar un even handler a cada uno de los botones.

Estos tienen que ejecutar funciones diferentes.

El del botón "Add to Cart" tienen que desplegar un [alert](https://developer.mozilla.org/es/docs/Web/API/Window/alert) que muestre el siguiente mensaje "Añadiendo producto {título} al carrito". Donde `título` es un prop que recibe el componente.

El del botón "Delete from Cart" tienen que desplegar un [alert](https://developer.mozilla.org/es/docs/Web/API/Window/alert) que muestre el siguiente mensaje "Removiendo producto {título}. Lamentamos tu decisión podemos ofrecerte un precio prefencial de {precio \* 0.8}". Donde `título` es un prop que recibe el componente al igual que `precio`. En este segundo mensaje dinámico tienes que alterar el prop de precio para ofrecer un 80% de descuento al usuario.

## Puntos extra

- En vez de declarar las dos funciones dentro del componente pasarlas como props al componente.
