var setadireita = window.document.getElementById("seta-direita");
var leonardo = window.document.getElementById("leonardo");
var samantha = window.document.getElementById("samantha");
var bruna = window.document.getElementById("bruna");
var setaesquerda = window.document.getElementById("seta-esquerda");

function rolardireita() {
    leonardo.style= "display:none";
    bruna.style= "display:flex";
    setadireita.style= "display:none";
    setaesquerda.style= "display:flex"; "margin-top: 55px";
}

function rolaresquerda()
{leonardo.style= "display:flex";
bruna.style= "display:none";
setadireita.style= "display:flex";
setaesquerda.style= "display:none"; "margin-top: 55px";

}