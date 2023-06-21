// var edad = prompt("Por favor, ingresa tu edad:");

// if (isNaN(edad)) {
//   alert("Ingresaste un valor inválido. Por favor, ingresa tu edad nuevamente.");
// } else {
//   if (edad < 18) {
//     window.location.href = "pagina-bloqueo.html";
//   } else {
//     alert("Usuario validado");
//   }
// }
// Obtener todos los elementos con la clase "photo-zoom"



// const photoItems = document.querySelectorAll('.photo-zoom');

// // Agregar un evento "mouseover" a cada elemento
// photoItems.forEach(photo => {
//   photo.addEventListener('mouseover', () => {
//     photo.style.transform = 'scale(1.1)'; // Aumentar la escala de la imagen en un 10%
//   });

//   // Agregar un evento "mouseout" a cada elemento
//   photo.addEventListener('mouseout', () => {
//     photo.style.transform = 'scale(1)'; // Restaurar la escala de la imagen a su tamaño original
//   });
// });
    // JavaScript para manipular el carrito
    // Puedes reemplazar los productos de ejemplo con tus propios productos

    // const products = [
    //   { id: 1, name: 'Pintura al óleo', price: 50 },
    //   { id: 2, name: 'Partitura musical', price: 10 },
    //   { id: 3, name: 'Libro de arquitectura', price: 30 },
    //   // ... Agrega más productos aquí
    // ];

    // const cartItems = [];

    // function renderProducts() {
    //   const productsContainer = document.querySelector('.products-container');
    //   productsContainer.innerHTML = '';

    //   products.forEach(product => {
    //     const productItem = document.createElement('div');
    //     productItem.classList.add('product');
    //     productItem.innerHTML = `
    //       <img src="producto${product.id}.jpg" alt="${product.name}">
    //       <h3>${product.name}</h3>
    //       <p>Precio: $${product.price}</p>
    //       <button onclick="addToCart(${product.id})">Agregar al carrito</button>
    //     `;
    //     productsContainer.appendChild(productItem);
    //   });
    // }

    // function addToCart(productId) {
    //   const product = products.find(item => item.id === productId);
    //   cartItems.push(product);
    //   renderCart();
    // }

    // function renderCart() {
    //   const cartItemsList = document.getElementById('cart-items');
    //   cartItemsList.innerHTML = '';

    //   cartItems.forEach(item => {
    //     const cartItem = document.createElement('li');
    //     cartItem.textContent = item.name;
    //     cartItemsList.appendChild(cartItem);
    //   });
    // }

    // renderProducts();


    // Obtener referencia al contenedor del carrito
const cartContainer = document.getElementById('cart-container');

// Arreglo para almacenar los productos en el carrito
let cartItems = [];

// Función para agregar un producto al carrito
function addToCart(product) {
  cartItems.push(product);
  renderCart();
}

// Función para renderizar el contenido del carrito
function renderCart() {
  // Vaciar el contenedor del carrito
  cartContainer.innerHTML = '';

  // Recorrer los productos en el carrito y crear elementos HTML correspondientes
  cartItems.forEach((product) => {
    const productElement = document.createElement('div');
    productElement.classList.add('cart-item');

    const titleElement = document.createElement('h5');
    titleElement.textContent = product.title;
    productElement.appendChild(titleElement);

    // Añade cualquier otra información adicional del producto, como imagen, precio, etc.

    cartContainer.appendChild(productElement);
  });
}

// Ejemplo de uso
const product1 = { title: 'Producto 1' };
const product2 = { title: 'Producto 2' };

addToCart(product1);
addToCart(product2);

