window.onload = function () {
    let entradilla = document.getElementById("entradilla");
    let aleatorio = Math.floor(Math.random() * 3) + 1;
    switch (aleatorio) {
        case 1:
            entradilla.innerText = "Bienvenido al Grupo Scout Sierra de Cameros";
            break;

        case 2:
            entradilla.innerText = "Si la vida fuera siempre fácil, sería insípida";
            break;
        default:
            entradilla.innerText = "Si tenéis el hábito de tomar las cosas con alegría, rara vez os encontraréis en circunstancias difíciles.";
            break;
    }
}