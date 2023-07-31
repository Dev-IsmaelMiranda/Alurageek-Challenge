import { productServices } from "../service/product-service.js";

//Por hacer, mostrar imagenes del json en la pag principal

/*const crearNuevoProducto = (nombre, precio, id) => {
    const contenido = `
        <a href="product.html?id=${id}">
            <img src="img/product${id}.png" alt="Imagen producto ${id}">
        </a>
        <p>${nombre}</p>
        <p class="product__precio">$${parseFloat(precio).toFixed(2)}</p>
        <p>#${id}</p>`;

    const producto = document.createElement("div");
    producto.classList.add("product__item");
    producto.innerHTML = contenido;

    return producto;
};*/

const crearNuevoProducto = (imagen, nombre, precio, id) => {
    const contenido = `
    <div class="product__box">
        <div class="product__box__properties">
            <div class="product__property">
                <a href="edit-product.html?id=${id}"><i class="fa-solid fa-pen"></i></a>
            </div>
            <div class="product__property">
                <a class="btn-delete" href="all-products.html" id="${id}"><i class="fa-solid fa-trash"></i></a>
            </div>
        </div>
        <img src="${imagen}" alt="Imagen producto ${id}">
    </div>
    <p>${nombre}</p>
    <p class="product__precio">$${parseFloat(precio).toFixed(2)}</p>
    <p>#${id}</p>`;

    const producto = document.createElement("div");
    producto.classList.add("product__item");
    producto.innerHTML = contenido;

    const btnEliminar = producto.querySelector(".btn-delete");
    btnEliminar.addEventListener("click", () => {
        const id = btnEliminar.id;
        productServices.eliminarProducto(id).then(respuesta => {
            console.log(respuesta);
        }).catch(error => console.log("Ocurrió un error"));

    });

    return producto;
};

const listaProductos = document.querySelector("[data-products-list]");

productServices.listaProductos().then((data) => {
    data.forEach(({ imagen, nombre, precio, id }) => {
        const nuevoProducto = crearNuevoProducto(imagen, nombre, precio, id);
        listaProductos.appendChild(nuevoProducto);
    });
}).catch(error => console.log("Hubo un error al crear un nuevo Producto: \n", error));
