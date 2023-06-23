// Variable para almacenar los productos en el carrito
let productosEnCarrito = [];

// Función para agregar un producto al carrito
function agregarAlCarrito(idProducto) {
  // Buscar el producto en el carrito por su ID
  let producto = productosEnCarrito.find(function(item) {
    return item.id === idProducto;
  });

  // Si el producto no existe en el carrito, agregarlo con cantidad 1
  if (!producto) {
    productosEnCarrito.push({ id: idProducto, cantidad: 1 });
  } else {
    // Si el producto ya existe, incrementar la cantidad
    producto.cantidad++;
  }

  // Actualizar el carrito en la página
  actualizarCarrito();
}

function quitarDelCarrito(idProducto) {
    // Buscar el producto en el carrito por su ID
    let indiceProducto = productosEnCarrito.findIndex(function(item) {
      return item.id === idProducto;
    });
  
    // Si el producto existe en el carrito, decrementar la cantidad
    if (indiceProducto !== -1) {
      productosEnCarrito[indiceProducto].cantidad--;
  
      // Si la cantidad llega a 0, eliminar el producto del carrito
      if (productosEnCarrito[indiceProducto].cantidad === 0) {
        productosEnCarrito.splice(indiceProducto, 1);
      }
    }
  
    // Actualizar el carrito en la página
    actualizarCarrito();
  }
  

// Función para actualizar el carrito en la página
function actualizarCarrito() {
    let elementoProductosEnCarrito = document.getElementById('productos-en-carrito');
    let precioTotal = 0;
  
    // Limpiar el contenido actual del carrito
    elementoProductosEnCarrito.innerHTML = '';
  
    // Recorrer los productos en el carrito y agregarlos al HTML
    productosEnCarrito.forEach(function(item) {
        let producto = obtenerProductoPorId(item.id);
        let precioProducto = calcularPrecioProducto(producto, item.cantidad);
        precioTotal += precioProducto;
    
        let li = document.createElement('li');
        li.textContent = producto.nombre + ' x ' + item.cantidad + ' - $' + precioProducto.toFixed(2);
        li.classList.add("elemento-Carrito")
    
        // Agrega un botón de eliminación al elemento li
        let botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.classList.add('btn', 'btn-danger', 'boton-eliminar');
        botonEliminar.setAttribute('data-id-producto', item.id);
        botonEliminar.classList.add("elemento-Eliminar")
        botonEliminar.addEventListener('click', function() {
        let idProducto = parseInt(this.getAttribute('data-id-producto'));
        quitarDelCarrito(idProducto);
        });
  
        li.appendChild(botonEliminar);
        elementoProductosEnCarrito.appendChild(li);
    });
  
  
    // Mostrar el precio total acumulado en el carrito
    let elementoTotal = document.createElement('ul');
    elementoTotal.textContent = 'Total: $' + precioTotal.toFixed(2);
    elementoProductosEnCarrito.appendChild(elementoTotal);
  }
  
// Función auxiliar para obtener un producto por su ID
function obtenerProductoPorId(idProducto) {
    let productos = [
      { id: 1, nombre: 'Pinceles al óleo', precio: 1000 },
      { id: 2, nombre: 'Mesa arquitectura', precio: 10000 },
      { id: 3, nombre: 'Trípode', precio: 7500 },
      { id: 4, nombre: 'Cámara de fotos', precio: 35000 },
      { id: 5, nombre: 'Luz para fotografías', precio: 5000 },
      { id: 6, nombre: 'Libro de arte', precio: 4000 },
      { id: 7, nombre: 'Variedad de telas', precio: 2200 },
      { id: 8, nombre: 'Pintura', precio: 2000 },
      { id: 9, nombre: 'Lápices negros', precio: 750 },
      // Agrega más productos aquí...
    ];
  
    return productos.find(function(producto) {
      return producto.id === idProducto;
    });
  }
  

// Función auxiliar para calcular el precio de un producto en función de su cantidad
function calcularPrecioProducto(producto, cantidad) {
  return producto.precio * cantidad;
}

function vaciarCarrito() {
    // Vaciar el arreglo de productos en el carrito
    productosEnCarrito = [];
  
    // Actualizar el carrito en la página
    actualizarCarrito();
}

function finalizarCompra() {
    // Verificar si el carrito está vacío
    if (productosEnCarrito.length === 0) {
      alert("El carrito está vacío");
      return; // Salir de la función sin continuar con la finalización de la compra
    }
  
    // Realizar aquí las acciones necesarias para finalizar la compra, como enviar los datos a un servidor, procesar el pago, etc.
  
    // Mostrar un mensaje al usuario
    alert("Su compra se ha realizado con éxito");
  
    // Vaciar el carrito
    vaciarCarrito();
  }
