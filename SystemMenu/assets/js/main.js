document.getElementById("boton").addEventListener("click", function() {
    let user = document.getElementById("u").value
    let contra = document.getElementById("c").value
    console.log("USER: " + user)
    console.log("PASS: " + contra)
    if (user == "admin" && contra == "123") {
        console.log("¡Bienvenido!")
        alert("¡Bienvenido! Datos correctos")
    } else {
        alert("Datos incorrectos")
    }
});