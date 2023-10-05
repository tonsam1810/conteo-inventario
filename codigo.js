// Inicializamos un objeto para realizar el seguimiento de los códigos y su cantidad
const inventario = {};

document.addEventListener("DOMContentLoaded", function () {
    // Obtenemos referencias a elementos HTML utilizando sus IDs
    const codigoInput = document.getElementById("codigoInput");
    const boton = document.getElementById("btn-ouput");
    const resultados = document.getElementById("resultados");

    // Agregamos un manejador de eventos 'click' al botón
    boton.addEventListener("click", function () {
        ingresarCodigo();
    });

    // Agregamos un manejador de eventos 'keypress' al campo de entrada
    codigoInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            ingresarCodigo();
        }
    });

    // Función para ingresar el código del producto y mostrar resultados
    function ingresarCodigo() {
        // Obtenemos el valor del campo de entrada (código del producto)
        const codigo = codigoInput.value.trim(); // Trim elimina espacios en blanco al principio y al final

        // Verificamos que el campo de entrada no esté vacío
        if (codigo !== "") {
            // Verificamos si el código ya está en el inventario
            if (inventario[codigo]) {
                // Si ya existe, incrementamos la cantidad
                inventario[codigo] += 1;
            } else {
                // Si es un código nuevo, lo agregamos al inventario con cantidad 1
                inventario[codigo] = 1;
            }

            // Mostramos los resultados actualizados inmediatamente
            mostrarResultados();

            // Limpiamos el campo de entrada para el próximo código
            codigoInput.value = "";
        }
    }

    // Función para mostrar los resultados en el elemento HTML
    function mostrarResultados() {
        resultados.innerHTML = "<h2>Códigos de productos ingresados y su cantidad:</h2>";

        // Recorremos el objeto de inventario para mostrar los resultados
        for (const codigo in inventario) {
            if (inventario.hasOwnProperty(codigo)) {
                const cantidad = inventario[codigo];
                // Agregamos cada resultado al elemento de resultados
                resultados.innerHTML += `<p>Código: ${codigo}, Cantidad: ${cantidad}</p>`;
            }
        }
    }
});
