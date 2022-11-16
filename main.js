productos = [
    {
        id:"1",
        titulo:"Mano en el corazon",
        imagen:"./img/foto1.jpeg",
        categoria:{
            id:"corazones",
            nombre:"Corazon",
        },
        precio:"$5500",

    },
    {
        id:"2",
        titulo:"Madera-tallada",
        imagen:"./img/foto2.jpeg",
        categoria:{
            id:"tallados",
            nombre:"Tallado",
        },
        precio:"$4000",

    }, {
        id:"3",
        titulo:"Amor por las plantas",
        imagen:"./img/foto3.jpeg",
        categoria:{
            id:"corazones",
            nombre:"Corazon",
        },
        precio:"$2000",

    }, {
        id:"4",
        titulo:"Corazon nochea de las estrellas",
        imagen:"./img/foto4.jpeg",
        categoria:{
            id:"corazones",
            nombre:"Corazon",
        },
        precio:"$2300",

    }, {
        id:"5",
        titulo:"Corazon con alas",
        imagen:"./img/foto5.jpeg",
        categoria:{
            id:"corazones",
            nombre:"Corazon",
        },
        precio:"$3000",

    }, {
        id:"6",
        titulo:"Corazon dentro de una cajita",
        imagen:"./img/foto6.jpeg",
        categoria:{
            id:"corazones",
            nombre:"Corazon",
        },
        precio:"$5400",

    }, {
        id:"7",
        titulo:"Corazon con alas por el mundo",
        imagen:"./img/foto7.jpeg",
        categoria:{
            id:"corazones",
            nombre:"Corazon",
        },
        precio:"$3200",
    }
]

const divProductos = document.getElementById('div-container-productos');
const btnCategory = document.querySelectorAll('btn-categoria');


cargarProductos= ()=> {
    productos.forEach(producto =>{
        const div = document.createElement('div');
        div.classList.add('producto');
        div.innerHTML =`<div class="producto">
        <img class="prodcuto-imagen" src="${producto.imagen}">
        <div class="productos-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">${producto.precio}</p>
            <button class="btd-add-product" id="${producto.id}">Agregar</button>
        </div>
    </div> 
        `;
        divProductos.append(div);
    })
}


cargarProductos();

btnCategory.forEach(boton => {
    boton.addEventListener("click", (e) => {
        e.currentTarget.classList.add('active');

    })
 })