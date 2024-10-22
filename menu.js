document.addEventListener("DOMContentLoaded", function() {
    // Referencia a los botones
    var buttonFab = document.getElementById("adminContent");
    var buttonPag = document.getElementById("pageContent");

    // Evento para redirigir a 'fab.html' al hacer clic en 'buttonfab'
    buttonFab.addEventListener("click", function() {
        window.location.href = "fab.html";
    });

    // Evento para redirigir a 'pag.html' al hacer clic en 'buttonpag'
    buttonPag.addEventListener("click", function() {
        window.location.href = "pag.html";
    });
});
