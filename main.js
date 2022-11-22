listaDeProductos = [
    {
        id: "1",
        titulo: "Mano en el corazon",
        imagen: "./img/foto1.jpeg",
        categoria: {
            id: "corazones",
            nombre: "Corazones",
        },
        precio: "$5500",

    },
    {
        id: "2",
        titulo: "Madera-tallada",
        imagen: "./img/foto2.jpeg",
        categoria: {
            id: "corazones",
            nombre: "Corazones",
        },
        precio: "$4000",

    }, {
        id: "3",
        titulo: "Amor por las plantas",
        imagen: "./img/foto3.jpeg",
        categoria: {
            id: "corazones",
            nombre: "Corazones",
        },
        precio: "$2000",

    }, {
        id: "4",
        titulo: "La noche estrellada",
        imagen: "./img/foto4.jpeg",
        categoria: {
            id: "corazones",
            nombre: "Corazones",
        },
        precio: "$2300",

    }, {
        id: "5",
        titulo: "Corazon con alas",
        imagen: "./img/foto5.jpeg",
        categoria: {
            id: "corazones",
            nombre: "Corazones",
        },
        precio: "$3000",

    }, {
        id: "6",
        titulo: "Corazon brillante",
        imagen: "./img/foto6.jpeg",
        categoria: {
            id: "corazones",
            nombre: "Corazones",
        },
        precio: "$5400",

    }, {
        id: "7",
        titulo: "Corazon viajero",
        imagen: "./img/foto7.jpeg",
        categoria: {
            id: "corazones",
            nombre: "Corazones",
        },
        precio: "$3200",
    }, {
        id: "8",
        titulo: "Mila al oleo",
        imagen: "./img/foto8.jpeg",
        categoria: {
            id: "cuadros",
            nombre: "Cuadros",
        },
        precio: "$6200",
    }, {
        id: "9",
        titulo: "Nuebes",
        imagen: "./img/foto9.jpeg",
        categoria: {
            id: "cuadros",
            nombre: "Cuadros",
        },
        precio: "$10200",
    }, {
        id: "10",
        titulo: "Fuego",
        imagen: "./img/foto10.jpeg",
        categoria: {
            id: "cuadros",
            nombre: "Cuadros",
        },
        precio: "$13200",
    }, {
        id: "11",
        titulo: "Colastine al Oleo",
        imagen: "./img/foto11.jpeg",
        categoria: {
            id: "cuadros",
            nombre: "Cuadros",
        },
        precio: "$15000",
    }, {
        id: "12",
        titulo: "Flores en acuarelas",
        imagen: "./img/foto12.jpeg",
        categoria: {
            id: "cuadros",
            nombre: "Cuadros",
        },
        precio: "$3200",
    }, {
        id: "13",
        titulo: "Tetera floral",
        imagen: "./img/foto13.jpeg",
        categoria: {
            id: "panuelos",
            nombre: "Pañuelos",
        },
        precio: "$8200",
    }, {
        id: "14",
        titulo: "Ojos estrellados",
        imagen: "./img/foto14.jpeg",
        categoria: {
            id: "panuelos",
            nombre: "Pañuelos",
        },
        precio: "$3200",
    }, {
        id: "15",
        titulo: "Margatira",
        imagen: "./img/foto15.jpeg",
        categoria: {
            id: "panuelos",
            nombre: "Pañuelos",
        },
        precio: "$3200",
    }, {
        id: "16",
        titulo: "Pastañas",
        imagen: "./img/foto16.jpeg",
        categoria: {
            id: "panuelos",
            nombre: "Pañuelos",
        },
        precio: "$3200",
    }, {
        id: "17",
        titulo: "Hojas magicas",
        imagen: "./img/foto17.jpeg",
        categoria: {
            id: "panuelos",
            nombre: "Pañuelos",
        },
        precio: "$3200",
    }, {
        id: "18",
        titulo: "Mis plantitas",
        imagen: "./img/foto18.jpeg",
        categoria: {
            id: "panuelos",
            nombre: "Pañuelos",
        },
        precio: "$3200",
    }, {
        id: "19",
        titulo: "Frutal",
        imagen: "./img/foto19.jpeg",
        categoria: {
            id: "panuelos",
            nombre: "Pañuelos",
        },
        precio: "$3200",
    }, {
        id: "20",
        titulo: "Psico",
        imagen: "./img/foto20.jpeg",
        categoria: {
            id: "panuelos",
            nombre: "Pañuelos",
        },
        precio: "$3200",
    }, {
        id: "21",
        titulo: "Fenix",
        imagen: "./img/foto21.jpeg",
        categoria: {
            id: "panuelos",
            nombre: "Pañuelos",
        },
        precio: "$3200",
    }, {
        id: "22",
        titulo: "Farol",
        imagen: "./img/foto22.jpeg",
        categoria: {
            id: "panuelos",
            nombre: "Corazon",
        },
        precio: "$3200",
    }, {
        id: "23",
        titulo: "Vos!",
        imagen: "./img/foto23.jpeg",
        categoria: {
            id: "panuelos",
            nombre: "Pañuelos",
        },
        precio: "$3200",
    }, {
        id: "24",
        titulo: "Tetera",
        imagen: "./img/foto24.jpeg",
        categoria: {
            id: "digital",
            nombre: "Redes",
        },
        precio: "$3200",
    }, {
        id: "25",
        titulo: "Sol brillante",
        imagen: "./img/foto25.jpeg",
        categoria: {
            id: "digital",
            nombre: "Redes",
        },
        precio: "$3200",
    }, {
        id: "26",
        titulo: "Gaucho",
        imagen: "./img/foto26.jpeg",
        categoria: {
            id: "cuadros",
            nombre: "Cuadros",
        },
        precio: "$3200",
    }, {
        id: "27",
        titulo: "Flores Acuarelas",
        imagen: "./img/foto27.jpeg",
        categoria: {
            id: "cuadros",
            nombre: "Cuadros",
        },
        precio: "$3200",
    }, {
        id: "28",
        titulo: "Viento",
        imagen: "./img/foto28.jpeg",
        categoria: {
            id: "cuadros",
            nombre: "Cuadros",
        },
        precio: "$3200",
    }, {
        id: "29",
        titulo: "Particiones",
        imagen: "./img/foto29.jpeg",
        categoria: {
            id: "cuadros",
            nombre: "Cuadros",
        },
        precio: "$3200",
    },
]
const divProductos = document.getElementById('div-container-productos');
const btnCategory = document.querySelectorAll('.btn-categoria');
const changeTitle = document.getElementById('titulo-principal');
let btnAddProduct = document.querySelectorAll(".btd-add-product");
const numberCart = document.getElementById('numerito')

cargarProductos = (productosElegidos) => {
    divProductos.innerHTML = "";
    productosElegidos.forEach(producto => {
        const div = document.createElement('div');
        /* div.classList.add('producto');*/
        div.innerHTML = `<div class="producto">
        <img class="prodcuto-imagen" src="${producto.imagen}">
        <div class="productos-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="producto-precio">${producto.precio}</p>
            <button class="btd-add-product" id="${producto.id}">Agregar</button>
        </div>
    </div> 
        `;
        divProductos.append(div);
        
    });
   refreshBtnAdd();
   console.log(btnAddProduct);
};
const refreshBtnAdd = () =>{
    btnAddProduct = document.querySelectorAll('.btd-add-product');
    btnAddProduct.forEach(boton => {
        boton.addEventListener("click", agregarCarrito)});
}

const productosCarrito= [];

const agregarCarrito = (e) =>{
    const idBtn = e.currentTarget.id;
    const productoAdd = listaDeProductos.find(producto => producto.id===idBtn);
    if(productosCarrito.some(producto => producto.id===idBtn)){
        const index = productosCarrito.findIndex(producto => producto.id===idBtn)
        productosCarrito[index].cantidad++;
    } else {
        productoAdd.cantidad = 1;
        productosCarrito.push(productoAdd);
    }
    refreshNumberCart()
    localStorage.setItem("productos-carrito", JSON.stringify(productosCarrito));
}
const refreshNumberCart =()=>{
    let numerito = productosCarrito.reduce((acc, producto) => acc + producto.cantidad, 0)
    numberCart.innerHTML=numerito;
}
cargarProductos(listaDeProductos);

btnCategory.forEach(boton => {
    boton.addEventListener("click", (e) => {
        btnCategory.forEach(boton => boton.classList.remove("active"));
        e.currentTarget.classList.add("active");
        if (e.currentTarget.id != "todos") {
            const productosCategorias = listaDeProductos.find(producto => producto.categoria.id === e.currentTarget.id )
            changeTitle.innerHTML= productosCategorias.categoria.nombre;
            const productoBtn = listaDeProductos.filter(producto => producto.categoria.id === e.currentTarget.id)
            cargarProductos(productoBtn)
        } else {
            changeTitle.innerHTML = "Todos los productos"
            cargarProductos(listaDeProductos)
        }
    })
});
