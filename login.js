document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevenir que el formulario se envíe automáticamente

    // Obtener los valores ingresados
    var usuario = document.getElementById("usuario").value;
    var contrasena = document.getElementById("contrasena").value;

    // Referencia a la base de datos de Firebase
    var dbRef = firebase.database().ref("usuarios/" + usuario);

    dbRef.once("value").then(function(snapshot) {
        if (snapshot.exists()) {
            var userData = snapshot.val();
            // Verificar si la contraseña coincide
            if (userData.contrasena === contrasena) {
                // Redirigir a la página prueba.html pasando el permiso en la URL
                window.location.href = "prueba.html?permiso=" + userData.permiso;
            } else {
                mostrarError("Usuario o contraseña incorrectos");
            }
        } else {
            mostrarError("Usuario no encontrado");
        }
    }).catch(function(error) {
        console.error("Error al acceder a la base de datos", error);
        mostrarError("Error al iniciar sesión");
    });
});

function mostrarError(mensaje) {
    var errorMensaje = document.getElementById("errorMensaje");
    errorMensaje.textContent = mensaje;
    errorMensaje.style.display = "block";
}
