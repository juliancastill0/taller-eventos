document.getElementById("contenedor").addEventListener("click", () => {
    alert("Hola! Soy el div");
});

document.getElementById("boton").addEventListener("click", (event) => {
    alert("Hola!");
    event.stopPropagation();
})