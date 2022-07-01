function encriptar(){
    let texto = document.querySelector("textarea").value.toLowerCase();

    let resultado = texto.replace(/e/igm, "enter");
    resultado = resultado.replace(/o/igm, "ober");
    resultado = resultado.replace(/i/igm, "imes");
    resultado = resultado.replace(/u/igm, "ufat");
    resultado = resultado.replace(/a/igm, "ai");

    document.getElementById("imagen-muñeco").style.display = "none";
    document.getElementById("primer-mensaje").style.display = "none";
    document.getElementById("segundo-mensaje").innerHTML = resultado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
}

function desencriptar(){
    let texto = document.querySelector("textarea").value.toLowerCase();

    let resultado = texto.replace(/enter/igm, "e");
    resultado = resultado.replace(/ober/igm, "o");
    resultado = resultado.replace(/imes/igm, "i");
    resultado = resultado.replace(/ai/igm, "a");
    resultado = resultado.replace(/ufat/igm, "u");

    document.getElementById("imagen-muñeco").style.display = "none";
    document.getElementById("primer-mensaje").style.display = "none";
    document.getElementById("segundo-mensaje").innerHTML = resultado;
    document.getElementById("btn-copiar").style.display = "show";
    document.getElementById("btn-copiar").style.display = "inherit";
}


document.getElementById("btn-copiar").onclick = function() {
    var contenido = document.getElementById("segundo-mensaje").innerHTML;

    navigator.clipboard.writeText(contenido)
    .then(() => {
        alert('Texto copiado');
    })
    .catch(err => {
        console.error('Error in copying text: ', err);
    });
}