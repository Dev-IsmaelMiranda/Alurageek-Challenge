import { productServices } from "../service/product-service.js";

const crearNuevoProducto = (nombre, precio, id) => {
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
}

const listaProductos = document.querySelector("[data-products-list]");

productServices.listaProductos().then((data) => {
    data.forEach(({ nombre, precio, id }) => {
        const nuevoProducto = crearNuevoProducto(nombre, precio, id);
        listaProductos.appendChild(nuevoProducto);
    });
}).catch(error => console.log("Hubo un error al crear un nuevo Producto: \n", error));






