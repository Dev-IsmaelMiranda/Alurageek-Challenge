import { productServices } from "../service/product-service.js";

const btnBuscar = document.querySelector("[data-form-btn-search]");

btnBuscar.addEventListener("click", (e) => {
    e.preventDefault();
    const text = document.querySelector("[data-form-input-search]").value;

    window.location = `products-search.html?text=${text}`;

});


