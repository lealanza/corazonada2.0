const productosEnCarrito = JSON.parse(localStorage.getItem("productos-carrito"))
const carritoVacio = document.getElementById('carrito-container');
const carritoActivo= document.getElementById('div-products-active');
const carritoAcciones = document.getElementById('carrito-acciones')

if(productosEnCarrito){

}else{
    carritoVacio.innerHTML="Tu carrito esta vacio."
}