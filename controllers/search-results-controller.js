import { productServices } from "../service/product-service.js";

const crearNuevoProducto = (imagen, nombre, precio, id) => {
    const contenido = `
    <a href="product.html?id=${id}">
        <img src="${imagen}" alt="Imagen producto ${id}">
    </a>
    <p>${nombre}</p>
    <p class="product__precio">$${parseFloat(precio).toFixed(2)}</p>
    <p>#${id}</p>`;

    const producto = document.createElement("div");
    producto.classList.add("product__item");
    producto.innerHTML = contenido;

    return producto;
};


const listaProductos = document.querySelector("[data-products-found]");

const mostrarResultadoBusqueda = async () => {
    const url = new URL(window.location);
    //obtenemos el ?texto= de la url
    const text = url.searchParams.get("text").toLowerCase();

    if (text == null) {
        console.log("El texto ingresado es nulo");
        //window.location = "error.html";
    }

    productServices.listaProductos().then((data) => {
        data.forEach(({ imagen, nombre, precio, id }) => {
            const nombreProducto = nombre.toLowerCase();

            if (nombreProducto.includes(text)) {
                const nuevoProducto = crearNuevoProducto(imagen, nombre, precio, id);
                listaProductos.appendChild(nuevoProducto);
            }
        });
    }).catch(error => console.log("Hubo un error al crear un nuevo Producto: \n", error));
}

mostrarResultadoBusqueda();
