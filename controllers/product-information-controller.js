import { productServices } from "../service/product-service.js";

const crearSeccionProducto = (nombre, precio, descripcion, id) => {
    const contenido = `
        <div class="product__description__img">
            <img src="img/product${id}.png" alt="Imagen del producto">
        </div>

        <div class="product__description__info">
            <h2>${nombre}</h2>
            <p class="product__precio">$${precio}</p>
            <p>${descripcion}</p>
        </div>`;

    const producto = document.createElement("div");
    producto.classList.add("product__description");
    producto.innerHTML = contenido;

    return producto;
};

const crearProductoSimilar = (imagen, nombre, precio, id) => {
    const contenido = `
    <img src="${imagen}" alt="Imagen producto ${id}">
    <p>${nombre}</p>
    <p class="product__precio">$${parseFloat(precio).toFixed(2)}</p>
    <a href="product.html?id=${id}">Ver producto</a>`;

    const producto = document.createElement("div");
    producto.classList.add("product__item");
    producto.innerHTML = contenido;

    return producto;
};


const obtenerInformacion = () => {
    const url = new URL(window.location);
    const idUrl = url.searchParams.get("id");
    const producto = document.querySelector("[data-producto]");

    productServices.detalleProducto(idUrl).then(({ nombre, precio, descripcion, id }) => {
        const infoProducto = crearSeccionProducto(nombre, precio, descripcion, id);
        producto.appendChild(infoProducto);
    });

    const productosSimilares = document.querySelector("[data-similar-products]");

    productServices.listaProductos().then((data) => {
        let count = 0;

        data.forEach(({ imagen, nombre, precio, id }) => {
            if (count >= 6) {
                return;
            }

            if (id != idUrl) {
                const nuevoProducto = crearProductoSimilar(imagen, nombre, precio, id);
                productosSimilares.appendChild(nuevoProducto);
                count++;
            }
        });
    }).catch(error => console.log("Hubo un error al crear un nuevo Producto: \n", error));

}

obtenerInformacion();



