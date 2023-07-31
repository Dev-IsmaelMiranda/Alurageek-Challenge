import { productServices } from "../service/product-service.js";

const crearNuevaLinea = (nombre, precio, descripcion, id) => {
    //console.log(id);
    const linea = document.createElement("tr");
    const contenido = `
        <td>${nombre}</td>
        <td>$${precio}</td>
        <td>${descripcion}</td>
        <td>
            <ul class="table__button-control">
                <li>
                    <a href="edit-product.html?id=${id}" class="btn-editar">Editar</a>
                </li>
                
                <li>
                    <button class="btn-eliminar" type="button" onclick="window.location.href='products-list.html';" id="${id}">Eliminar</button>
                </li>
            </ul>
        </td>
    `;

    linea.innerHTML = contenido;


    const btn = linea.querySelector("button");
    btn.addEventListener("click", () => {
        const id = btn.id;
        productServices.eliminarProducto(id).then(respuesta => {
            console.log(respuesta);
        }).catch(error => console.log("Ocurrió un error"));

    });

    return linea;
};

const table = document.querySelector("[data-table]");

//then es la función que se ejecuta en caso se tenga información
productServices.listaProductos().then((data) => {
    //destructuración del perfil en {nombre, email, perfil}
    data.forEach(({ nombre, precio, descripcion, id }) => {
        //const {nombre, email, id} = perfil; //seria otra alternativa
        const nuevaLinea = crearNuevaLinea(nombre, precio, descripcion, id);
        table.appendChild(nuevaLinea);
    });
}).catch(error => console.log("Ocurrió un error"));
