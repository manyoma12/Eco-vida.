function comprobarRespuesta(esCorrecta) {
    const resultado = document.getElementById("resultado");

    if (esCorrecta) {
        resultado.textContent =
            "¡Correcto! 🌱 Reutilizar objetos ayuda a reducir los residuos y a cuidar el medio ambiente.";
        resultado.style.color = "green";
    } else {
        resultado.textContent =
            "Inténtalo de nuevo. 💚 Piensa cuál opción ayuda a reducir los residuos.";
        resultado.style.color = "red";
    }
}
