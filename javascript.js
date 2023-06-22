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


//     // Obtener referencia al contenedor del carrito
// const cartContainer = document.getElementById('cart-container');

// // Arreglo para almacenar los productos en el carrito
// let cartItems = [];

// // Función para agregar un producto al carrito
// function addToCart(product) {
//   cartItems.push(product);
//   renderCart();
// }

// // Función para renderizar el contenido del carrito
// function renderCart() {
//   // Vaciar el contenedor del carrito
//   cartContainer.innerHTML = '';

//   // Recorrer los productos en el carrito y crear elementos HTML correspondientes
//   cartItems.forEach((product) => {
//     const productElement = document.createElement('div');
//     productElement.classList.add('cart-item');

//     const titleElement = document.createElement('h5');
//     titleElement.textContent = product.title;
//     productElement.appendChild(titleElement);

//     // Añade cualquier otra información adicional del producto, como imagen, precio, etc.

//     cartContainer.appendChild(productElement);
//   });
// }

// // Ejemplo de uso
// const product1 = { title: 'Producto 1' };
// const product2 = { title: 'Producto 2' };

// addToCart(product1);
// addToCart(product2);

// const products = [
//     { 
//       title: 'Pinceles al óleo',
//     //   image: './Imagenes/pinceles.webp',
//       description: 'Descripción del producto.',
//       price: 10.99
//     },
//     { 
//       title: 'Mesa arquitectura',
//     //   image: './Imagenes/mesa aaa.jpeg',
//       description: 'Descripción del producto.',
//       price: 99.99
//     },
//     // Agrega más objetos de producto según tus necesidades
//   ];
  
// const cartItems = [];
  
// function addToCart(productId) {
//     const product = products.find((item, index) => index === productId - 1);
//     if (product) {
//       const existingItem = cartItems.find((item) => item.productId === productId);
//       if (existingItem) {
//         existingItem.quantity += 1;
//       } else {
//         cartItems.push({
//           productId,
//           product,
//           quantity: 1,
//         });
//       }
//       renderCart();
//     }
//   }
  
// function removeFromCart(productId) {
//     const itemIndex = cartItems.findIndex((item) => item.productId === productId);
//     if (itemIndex !== -1) {
//       cartItems.splice(itemIndex, 1);
//       renderCart();
//     }
//   }
  
// function renderCart() {
//     const cartItemsContainer = document.getElementById('cart-items');
//     cartItemsContainer.innerHTML = '';
  
//     cartItems.forEach((item) => {
//       const product = item.product;
  
//       const listItem = document.createElement('li');
//       listItem.classList.add('cart-item');
  
//     //   const imageElement = document.createElement('img');
//     //   imageElement.src = product.image;
//     //   imageElement.alt = product.title;
//     //   listItem.appendChild(imageElement);
  
//       const titleElement = document.createElement('h5');
//       titleElement.textContent = product.title;
//       listItem.appendChild(titleElement);
  
//       const descriptionElement = document.createElement('p');
//       descriptionElement.textContent = product.description;
//       listItem.appendChild(descriptionElement);
  
//       const priceElement = document.createElement('p');
//       priceElement.textContent = `$${product.price.toFixed(2)}`;
//       listItem.appendChild(priceElement);
  
//       const quantityElement = document.createElement('p');
//       quantityElement.textContent = `Cantidad: ${item.quantity}`;
//       listItem.appendChild(quantityElement);
  
//       const removeButton = document.createElement('button');
//       removeButton.textContent = 'Eliminar';
//       removeButton.addEventListener('click', () => {
//         removeFromCart(item.productId);
//       });
//       listItem.appendChild(removeButton);
  
//       cartItemsContainer.appendChild(listItem);
//     });
//   }
  
// Variable para almacenar los productos en el carrito
var cartItems = [];

// Función para agregar un producto al carrito
function addToCart(productId) {
  // Buscar el producto en el carrito por su ID
  var product = cartItems.find(function(item) {
    return item.id === productId;
  });

  // Si el producto no existe en el carrito, agregarlo con cantidad 1
  if (!product) {
    cartItems.push({ id: productId, quantity: 1 });
  } else {
    // Si el producto ya existe, incrementar la cantidad
    product.quantity++;
  }

  // Actualizar el carrito en la página
  updateCart();
}

function removeFromCart(productId) {
    // Buscar el producto en el carrito por su ID
    var productIndex = cartItems.findIndex(function(item) {
      return item.id === productId;
    });
  
    // Si el producto existe en el carrito, decrementar la cantidad
    if (productIndex !== -1) {
      cartItems[productIndex].quantity--;
  
      // Si la cantidad llega a 0, eliminar el producto del carrito
      if (cartItems[productIndex].quantity === 0) {
        cartItems.splice(productIndex, 1);
      }
    }
  
    // Actualizar el carrito en la página
    updateCart();
  }
  

// Función para actualizar el carrito en la página
function updateCart() {
    var cartItemsElement = document.getElementById('cart-items');
    var totalPrice = 0;
  
    // Limpiar el contenido actual del carrito
    cartItemsElement.innerHTML = '';
  
    // Recorrer los productos en el carrito y agregarlos al HTML
    // Dentro de la función updateCart()
    cartItems.forEach(function(item) {
        var product = getProductById(item.id);
        var productPrice = calculateProductPrice(product, item.quantity);
        totalPrice += productPrice;
    
        var li = document.createElement('li');
        li.textContent = product.name + ' x ' + item.quantity + ' - $' + productPrice.toFixed(2);
        li.classList.add("elemento-Carrito")
    
        // Agrega un botón de eliminación al elemento li
        var deleteButton = document.createElement('button');
        deleteButton.textContent = 'Eliminar';
        deleteButton.classList.add('btn', 'btn-danger', 'delete-button');
        deleteButton.setAttribute('data-product-id', item.id);
        deleteButton.classList.add("elemento-Eliminar")
        deleteButton.addEventListener('click', function() {
        var productId = parseInt(this.getAttribute('data-product-id'));
        removeFromCart(productId);
        });
  
        li.appendChild(deleteButton);
        cartItemsElement.appendChild(li);
    });
  
  
    // Mostrar el precio total acumulado en el carrito
    var totalElement = document.createElement('ul');
    totalElement.textContent = 'Total: $' + totalPrice.toFixed(2);
    cartItemsElement.appendChild(totalElement);
  }
  
// Función auxiliar para obtener un producto por su ID

// Función auxiliar para obtener un producto por su ID
function getProductById(productId) {
    var products = [
      { id: 1, name: 'Pinceles al óleo', price: 1000 },
      { id: 2, name: 'Mesa arquitectura', price: 10000 },
      { id: 3, name: 'Trípode', price: 7500 },
      { id: 4, name: 'Cámara de fotos', price: 35000 },
      { id: 5, name: 'Luz para fotografías', price: 5000 },
      { id: 6, name: 'Libro de arte', price: 4000 },
      { id: 7, name: 'Variedad de telas', price: 2200 },
      { id: 8, name: 'Pintura', price: 2000 },
      { id: 9, name: 'Lápices negros', price: 750 },
      // Agrega más productos aquí...
    ];
  
    return products.find(function(product) {
      return product.id === productId;
    });
  }
  

// Función auxiliar para calcular el precio de un producto en función de su cantidad
function calculateProductPrice(product, quantity) {
  return product.price * quantity;
}

function clearCart() {
    // Vaciar el arreglo de productos en el carrito
    cartItems = [];
  
    // Actualizar el carrito en la página
    updateCart();
}

function checkout() {
    // Verificar si el carrito está vacío
    if (cartItems.length === 0) {
      alert("El carrito está vacío");
      return; // Salir de la función sin continuar con la finalización de la compra
    }
  
    // Realizar aquí las acciones necesarias para finalizar la compra, como enviar los datos a un servidor, procesar el pago, etc.
  
    // Mostrar un mensaje al usuario
    alert("Su compra se ha realizado con éxito");
  
    // Vaciar el carrito
    clearCart();
  }
  
  
