
const listaUsuarios = () => {
    return fetch("https://ejemplo-json.herokuapp.com/usuario").then((respuesta) => respuesta.json());
};

export const loginServices = {
    listaUsuarios
};