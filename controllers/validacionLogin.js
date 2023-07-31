{
	//const formulario = document.querySelector(".form__login");
	const inputs = document.querySelectorAll(".form__login .form__input");
	const botonEnviarLogin = document.querySelector(".form__login button");
	botonEnviarLogin.disabled = true;

	const expresiones = {
		correo: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
		contrasenia: /^[A-Za-zñÑ0-9]\w{1,15}$/
	}

	const campos = {
		correo: false,
		contrasenia: false
	}

	const validarFormulario = (e) => {
		switch (e.target.name) {
			case "correo":
				validarCampo(expresiones.correo, e.target, "correo");
				break;
			case "contrasenia":
				validarCampo(expresiones.contrasenia, e.target, "contrasenia");
				break;
		}

		validarBoton();
	}

	const validarCampo = (expresion, input, campo) => {
		if (expresion.test(input.value)) {
			document.getElementById(`grupo__${campo}`).classList.remove("form__caja-incorrecto");
			document.getElementById(`grupo__${campo}`).classList.add("form__caja-correcto");
			document.querySelector(`#grupo__${campo} .form__input-error`).classList.remove(".form__input-error-activo");
			campos[campo] = true;
		} else {
			document.getElementById(`grupo__${campo}`).classList.add("form__caja-incorrecto");
			document.getElementById(`grupo__${campo}`).classList.remove("form__caja-correcto");
			document.querySelector(`#grupo__${campo} .form__input-error`).classList.add(".form__input-error-activo");
			campos[campo] = false;
		}
	}

	inputs.forEach((input) => {
		input.addEventListener("blur", validarFormulario);
	});

	function validarBoton() {
		if (campos.correo && campos.contrasenia) {
			botonEnviarLogin.disabled = false;
		} else {
			botonEnviarLogin.disabled = true;
		}
	}
	/*
	botonEnviarLogin.addEventListener("click", enviarFormulario);

	function enviarFormulario(event) {
		event.preventDefault();

		inputs.forEach(input => {
			input.value = "";
			input.parentElement.classList.remove("form__caja-correcto");
		});

		botonEnviarLogin.disabled = true;
	}*/
}

