import { loginServices } from "../service/login-service.js";

const formulario = document.querySelector("[data-form]")

formulario.addEventListener("submit", (e) => {
    e.preventDefault();

    const correoIn = document.querySelector("[data-form-correo]").value;
    const contraseniaIn = document.querySelector("[data-form-contrasenia]").value;

    loginServices.listaUsuarios().then((data) => {
        data.forEach(({ correo, contrasenia }) => {
            if (correoIn == correo && contraseniaIn == contrasenia) {
                window.location = "all-products.html";
            }
        });
    }).catch(error => console.log("Error: " + error));
});

