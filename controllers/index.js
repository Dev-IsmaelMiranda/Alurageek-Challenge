const fileInput = document.getElementById("image");
const dragZone = document.getElementById("result__image");
const img = document.getElementById("img__result");

//al hacer click en el campo, que actue como un input file
dragZone.addEventListener("click", () => fileInput.click()
);

//al arrastar una imagen por el campo haga..
dragZone.addEventListener("dragover", (e) => {
    e.preventDefault();
    dragZone.classList.add("form__file__result--active");
});

//al quitar una imagen por el campo haga..
dragZone.addEventListener("dragleave", (e) => {
    e.preventDefault();
    dragZone.classList.remove("form__file__result--active");
});

const uploadImage = (file) => {
    //Leemos los archivos que nos llegan (file)
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.addEventListener("load", (e) => {
        img.setAttribute("src", e.target.result);
    });
};

//Al sortar una imagen en el campo no abrir en una pestaña nueva
dragZone.addEventListener("drop", (e) => {
    e.preventDefault();
    //asignamos al fileInput la imagen que arrastramos en el campo
    fileInput.files = e.dataTransfer.files;
    const file = fileInput.files[0];

    uploadImage(file);
});

//cada vez que cambie el archivo que se le pase hace..
fileInput.addEventListener("change", (e) => {
    //capturamos el archivo que se le pase
    const file = e.target.files[0];

    uploadImage(file);
});