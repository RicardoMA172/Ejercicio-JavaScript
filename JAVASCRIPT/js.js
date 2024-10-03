document.addEventListener("DOMContentLoaded", () => {
    const formulario = document.getElementById("formulario");
    const resultado = document.getElementById("resultado");
    const datos = document.getElementById("datos");
    const cerrar = document.getElementById("cerrar");

    formulario.addEventListener("submit", function (event) {
        event.preventDefault(); // Evitar el envío del formulario

        const nombre = document.getElementById("nombre").value.trim();
        const apellidos = document.getElementById("apellidos").value.trim();
        const edad = parseInt(document.getElementById("edad").value);

        // Validar campos
        if (nombre === "" || apellidos === "") {
            alert("Los campos de nombre y apellidos no pueden estar vacíos.");
            return;
        }

        if (isNaN(edad) || edad <= 0) {
            alert("La edad debe ser un número positivo mayor a 0.");
            return;
        }

        // Mostrar datos en la caja
        datos.innerHTML = `Nombre: ${nombre} <br> Apellidos: ${apellidos} <br> Edad: ${edad}`;
        resultado.classList.remove("hidden");

        // Limpiar el formulario
        formulario.reset();
        document.getElementById("nombre").focus();
    });

    // Función para cerrar y ocultar los datos
    cerrar.addEventListener("click", () => {
        resultado.classList.add("hidden");
        formulario.reset();
        document.getElementById("nombre").focus();
    });
});
