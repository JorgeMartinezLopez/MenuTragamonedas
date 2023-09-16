const questionText = "¿Cuál es la probabilidad de que...";
const questionElement = document.getElementById("question");
const answerElement = document.getElementById("answer");

function typeWriter(textElement, text, speed, callback) {
    let i = 0;
    textElement.innerHTML = ""; // Limpiar el contenido inicial
    const timer = setInterval(function () {
        if (i < text.length) {
            textElement.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(timer);
            // Llama a la función de devolución de llamada cuando la animación termine
            if (callback) {
                callback();
            }
        }
    }, speed);
}

// Llamar a la función typeWriter para escribir el texto gradualmente
typeWriter(questionElement, questionText, 50, function () {
    // El texto de arriba ha terminado de escribirse, ahora puedes mostrar el texto de abajo
    typeWriter(answerElement, "...logres obtener 3 figuras iguales?", 50);
});

document.getElementById("playButton").addEventListener("click", function () {
    // Cambiar la ubicación del navegador al sitio web deseado
    window.location.href = "https://jorgemartinezlopez.github.io/TragamonedasGeometrico.github.io/"; // Reemplaza con la URL que desees
});

