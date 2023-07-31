
{
	const formulario = document.querySelector(".form__add-product");
	const inputs = document.querySelectorAll(".form__add-product .form__input");
	const botonAgregarProducto = document.querySelector(".form__add-product button");
	botonAgregarProducto.disabled = true;

	const expresiones = {
		nombre: /^[a-zA-ZÀ-ÿ0-9\s]{5,50}$/,
		precio: /^[\d\.,]+$/,
		descripcion: /^[a-zA-ZÀ-ÿ0-9\s]{1,300}$/
	}

	const campos = {
		nombre: false,
		precio: false,
		descripcion: false
	}

	const validarFormulario = (e) => {
		switch (e.target.name) {
			case "nombre":
				validarCampo(expresiones.nombre, e.target, "nombre");
				break;
			case "precio":
				validarCampo(expresiones.precio, e.target, "precio");
				break;
			case "descripcion":
				validarCampo(expresiones.descripcion, e.target, "descripcion");
				break;
		}

		validarBoton();
	}

	const validarCampo = (expresion, input, campo) => {
		if (expresion.test(input.value)) {
			document.querySelector(`.form__add-product #grupo__${campo}`).classList.remove("form__caja-incorrecto");
			document.querySelector(`.form__add-product #grupo__${campo}`).classList.add("form__caja-correcto");
			document.querySelector(`.form__add-product #grupo__${campo} .form__input-error`).classList.remove(".form__input-error-activo");
			campos[campo] = true;
		} else {
			document.querySelector(`.form__add-product #grupo__${campo}`).classList.add("form__caja-incorrecto");
			document.querySelector(`.form__add-product #grupo__${campo}`).classList.remove("form__caja-correcto");
			document.querySelector(`.form__add-product #grupo__${campo} .form__input-error`).classList.add(".form__input-error-activo");
			campos[campo] = false;
		}
	}

	inputs.forEach((input) => {
		input.addEventListener("blur", validarFormulario);
	});

	function validarBoton() {
		if (campos.nombre && campos.precio && campos.descripcion) {
			botonAgregarProducto.disabled = false;
		} else {
			botonAgregarProducto.disabled = true;
		}
	}
}
